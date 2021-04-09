from setuptools import setup

setup(
    name='lektor-markdown-ruby-blocks',
    version='0.1',
    author='Sky Liu',
    author_email='',
    license='MIT',
    py_modules=['lektor_markdown_ruby_blocks'],
    url='',
    entry_points={
        'lektor.plugins': [
            'markdown-ruby-blocks = lektor_markdown_ruby_blocks:RubyBlockPlugin',
        ]
    }
)