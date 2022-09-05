# markdown-image-resize

Add support to set the image size with additional markdown syntax

## Syntax

- Specify both width and height
  ```markdown
  ![alttext](image.png =256x300)
  ```
- Specify only width or height, and automatically determines the other

  ```markdown
  ![alttext](image.png =256x)
  ![alttext](image.png =x300)
  ```
