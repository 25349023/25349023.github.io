import re
from html import escape
from lektor.pluginsystem import Plugin

# group 1: color of the text, group 2: the content
rb_block_pattern = re.compile(r'^\^\^(#[0-9a-fA-F]{6,8})?\n(.*)\^\^$', flags=re.DOTALL)
# group 1: base text, group 2: ruby text
ruby_pattern = re.compile(r'\((.+?)\)\[(.+?)]')


class RubyBlockMixin:
    name = 'Markdown Ruby Block'
    description = 'Add supports to ruby blocks syntax in Markdown'

    def paragraph(self, text):
        match = rb_block_pattern.match(text)
        if match is None:
            return super().paragraph(text)
        color = match.group(1) if match.group(1) is not None else '#5c443a'
        ruby_text = self._rubify(match.group(2).strip(), color)

        return f'<p>{ruby_text}</p>'

    def _rubify(self, content, color):
        lines = content.split('\n')
        converted_line = []
        for line in lines:
            if line.startswith('% '):
                rb_line = self._rubify_line(line[2:], None)
            else:
                rb_line = self._rubify_line(line, color)
            converted_line.append(rb_line)
        return '<br />\n'.join(converted_line)

    def _rubify_line(self, line, color):
        if line == "-##-":
            return ''
        rb_text = ruby_pattern.sub(r'\1<rp>(</rp><rt>\2</rt><rp>)</rp>', line)
        if color is not None:
            rb_line = f'<span class="ruby-line" style="color: {color};"><ruby>{rb_text}</ruby></span>'
        else:
            rb_line = f'<span class="ruby-line"><ruby>{rb_text}</ruby></span>'

        return rb_line


class RubyBlockPlugin(Plugin):
    name = 'Markdown Ruby Block'
    description = 'Add supports to ruby blocks syntax in Markdown'

    def on_markdown_config(self, config, **extra):
        config.renderer_mixins.append(RubyBlockMixin)
