from lektor.pluginsystem import Plugin
import uuid
from lektor.utils import slugify
from markupsafe import Markup
from collections import namedtuple


TocEntry = namedtuple('TocEntry', ['anchor', 'title', 'children'])


class HeaderAnchorMixin:
    counter = 0

    @classmethod
    def reset_cnt(cls):
        cls.counter = 0

    def header(renderer, text, level, raw):
        anchor = f'{slugify(raw)}-{HeaderAnchorMixin.counter}'
        HeaderAnchorMixin.counter += 1
        renderer.meta['toc'].append((level, anchor, Markup(text)))
        return '<h%d id="%s">%s</h%d>' % (level, anchor, text, level)


class MarkdownHeaderAnchorsCntsuffixPlugin(Plugin):
    name = 'Markdown Header Anchors with Counting Suffix'
    description = 'Lektor plugin that adds anchors and table of contents to markdown headers.'

    def on_before_build(self, source, prog, **extra):
        # print(f'building {source.source_filename}')
        HeaderAnchorMixin.reset_cnt()

    def on_markdown_config(self, config, **extra):
        config.renderer_mixins.append(HeaderAnchorMixin)

    def on_markdown_meta_init(self, meta, **extra):
        meta['toc'] = []

    def on_markdown_meta_postprocess(self, meta, **extra):
        prev_level = None
        toc = []
        stack = [toc]

        for level, anchor, title in meta['toc']:
            if prev_level is None:
                prev_level = level
            elif prev_level == level - 1:
                stack.append(stack[-1][-1][2])
                prev_level = level
            elif prev_level > level:
                while prev_level > level:
                    # Just a simple workaround for when people do weird
                    # shit with headlines.
                    if len(stack) > 1:
                        stack.pop()
                    prev_level -= 1
            stack[-1].append(TocEntry(anchor, title, []))

        meta['toc'] = toc