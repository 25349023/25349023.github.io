from setuptools import setup

setup(
    author='Sky Liu',
    keywords='Lektor plugin markdown static-site blog toc table-of-contents anchors headers',
    license='BSD',
    name='lektor-markdown-header-anchors-cntsuffix',
    py_modules=['lektor_markdown_header_anchors_cntsuffix'],
    url='',
    version='0.1',
    entry_points={
        'lektor.plugins': [
            'markdown-header-anchors-cntsuffix = '
            'lektor_markdown_header_anchors_cntsuffix:MarkdownHeaderAnchorsCntsuffixPlugin',
        ]
    }
)