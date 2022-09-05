import re

from lektor.pluginsystem import Plugin

size_pattern = re.compile(r'(.*) =(\d*)x(\d*)')


class ImageResizeMixin:
    def image(self, src, title, text):
        match = size_pattern.match(src)
        if match is None:
            return super().image(src, title, text)

        style_str = ''
        if match[2]:
            style_str += f'width="{match[2]}" '
        if match[3]:
            style_str += f'height="{match[3]}" '

        base_img_tag = super().image(match[1], title, text)
        base_img_tag = base_img_tag[:5] + style_str + base_img_tag[5:]
        return base_img_tag


class MarkdownImageResizePlugin(Plugin):
    name = 'markdown-image-resize'
    description = 'Add support to set the image size with additional markdown syntax'

    def on_markdown_config(self, config, **extra):
        config.renderer_mixins.append(ImageResizeMixin)

    # def on_process_template_context(self, context, **extra):
    #     def test_function():
    #         return 'Value from plugin %s' % self.name
    #
    #     context['test_function'] = test_function
