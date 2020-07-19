# HTML

## HTML Elements

An HTML element is a start tag and an end tag with content in between:

### `<h1>This is a Heading</h1>`

## HTML Attributes

HTML elements can have attributes.

Attributes provide additional information about the element.

Attributes come in name/value pairs like charset="utf-8"

## A Simple HTML Document

```
<!DOCTYPE html>
<html lang="en">

<meta charset="utf-8">
<title>Page Title</title>

<body>
   <h1>This is a Heading</h1>
   <p>This is a paragraph.</p>
   <p>This is another paragraph.</p>
</body>

</html>
```

HTML elements are the building blocks of HTML pages.

- The `<!DOCTYPE html>` declaration defines this document to be HTML5

- The `<html>` element is the root element of an HTML page

- The `lang` attribute defines the language of the document

- The `<meta>` element contains meta information about the document

- The `charset`attribute defines the character set used in the document

- The `<title>` element specifies a title for the document

- The `<body>` element contains the visible page content

- The `<h1>` element defines a large heading

- The `<p>` element defines a paragraph

## HTML Documents

All HTML documents must start with a document type declaration: `<!DOCTYPE html>`.

The HTML document itself begins with `<html>` and ends with `</html>`.

The visible part of the HTML document is between `<body>` and `</body>`.

## HTML Headings

HTML headings are defined with `<h1>` to `<h6>` tags.

```
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>
```

<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>

## HTML Paragraphs

HTML paragraphs are defined with `<p>` tags:

```
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

## HTML Links

HTML links are defined with `<a>` tags:

```
<a href="https://www.w3schools.com">This is a link</a>
```

<a href="https://www.w3schools.com">This is a link</a>
The link's destination is specified in the href attribute.

## HTML Images

HTML images are defined with `<img>` tags.

The source file (src), alternative text (alt), width, and height are provided as attributes:

```
<img src="https://www.google.com/images/branding/googlelogo/googlelogo_color_272x92dp.png" alt="google" style="width:100%;height:100%" />

```

<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google" style="width:100%;height:100%" />

## HTML Buttons
