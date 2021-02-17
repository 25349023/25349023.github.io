from setuptools import setup

setup(
    name='lektor-markdown-linenum-code',
    version='0.1',
    author='Sky Liu',
    author_email='',
    license='MIT',
    py_modules=['lektor_markdown_linenum_code'],
    url='',
    entry_points={
        'lektor.plugins': [
            'markdown-linenum-code = lektor_markdown_linenum_code:LinenumCodePlugin',
        ]
    }
)