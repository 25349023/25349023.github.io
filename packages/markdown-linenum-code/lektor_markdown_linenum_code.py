import re
from html import escape
from lektor.pluginsystem import Plugin


class LinenumCodeMixin:
    name = 'Markdown Line Number'
    description = 'Add supports to code blocks with line numbers in Markdown'

    def block_code(self, code, info=None):
        html = '<pre><code'
        if info is not None:
            info = info.strip()
        if info:
            info = info.split(',')
            lang = escape(info[0])
            if len(info) > 1:
                line_num = escape(info[1])
                if line_num == '=':
                    html = '<pre class="line-numbers"><code'
            html += ' class="language-' + lang + '"'
        return html + '>' + escape(code).strip() + '</code></pre>\n'


class LinenumCodePlugin(Plugin):
    name = 'Markdown Line Number'
    description = 'Add supports to code blocks with line numbers in Markdown.'

    def on_markdown_config(self, config, **extra):
        config.renderer_mixins.append(LinenumCodeMixin)
