# HTML

## HTML Elements

An HTML element is a start tag and an end tag with content in between:

### `<h1>This is a Heading</h1>`

## HTML Attributes

HTML elements can have attributes.

Attributes provide additional information about the element.

Attributes come in name/value pairs like charset="utf-8"

## A Simple HTML Document

HTML tags are not case sensitive: `<P>` means the same as `<p>`.

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

# The Poem Problem

```
<p>
My Bonnie lies over the ocean.

My Bonnie lies over the sea.

My Bonnie lies over the ocean.

Oh, bring back my Bonnie to me.

</p>

```

<a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_poem">see here the result</a>

```
<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>

```

<a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_pre">see here the result</a>

Solution - The HTML `<pre>` Element

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
<img src="https://www.google.com/images/branding/googlelogo/googlelogo_color_272x92dp.png" alt="google" style="width:50%" />
```

<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google" style="width:50%" />

### Image Maps

```
<img src="workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map>
```

### Shape

You must define the shape of the clickable area, and you can choose one of these values:

- rect : defines a rectangular region
- circle : defines a circular region
- poly : defines a polygonal region
- default : defines the entire region

<a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_map2">See the result</a>

![](https://www.w3schools.com/html/workplace.jpg)

#### Shape="rect"

The coordinates for shape="rect" come in pairs, one for the x-axis and one for the y-axis.

So, the coordinates 34,44 is located 34 pixels from the left margin and 44 pixels from the top:

![image](https://user-images.githubusercontent.com/42722816/88474980-1a998200-cf2c-11ea-99e3-6ba61b3fe101.png)

The coordinates 270,350 is located 270 pixels from the left margin and 350 pixels from the top:

![image](https://user-images.githubusercontent.com/42722816/88474985-26854400-cf2c-11ea-857b-8963eb3472c9.png)

`<area shape="rect" coords="34, 44, 270, 350" href="computer.htm">`

#### Shape="circle"

To add a circle area, first locate the coordinates of the center of the circle: 337,300

![image](https://user-images.githubusercontent.com/42722816/88475023-76fca180-cf2c-11ea-9faf-9396b884fa52.png)

Then specify the radius of the circle: 44 pixels

![image](https://user-images.githubusercontent.com/42722816/88475028-7bc15580-cf2c-11ea-8c67-f3ab9157fe9a.png)

#### Shape="poly"

The shape="poly" contains several coordinate points, which creates a shape formed with straight lines (a polygon).

This can be used to create any shape.

## HTML Buttons

## HTML Links

The HTML <a> tag defines a hyperlink. It has the following syntax:

`<a href="url">link text</a>`

### HTML Links - The target Attribute

The target attribute specifies where to open the linked document.

- `_self` Default. Opens the document in the same window/tab as it was clicked
- `_blank` Opens the document in a new window or tab
- `_parent` Opens the document in the parent frame
- `_top` Opens the document in the full body of the window

eg : `<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>`

### Use an Image as a Link

```
<a href="default.asp">
<img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>
```

### Link to an Email Address

Use mailto: inside the href attribute to create a link that opens the user's email program
`<a href="mailto:someone@example.com">Send email</a>`

## br Tag

The `<br>` tag defines a line break, and is an empty element without a closing tag:

# HTML Attributes

- All HTML elements can have attributes
- Attributes provide additional information about elements
- Attributes are always specified in the start tag
- Attributes usually come in name/value pairs like: name="value"

# The href Attribute

The `<a>` tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:

`<a href="https://www.w3schools.com">Visit W3Schools</a>`

# The src Attribute

The `<img>` tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:

`<img src="img_girl.jpg">`

# The width and height Attributes

The `<img>` tag should also contain the width and height attributes, which specifies the width and height of the image (in pixels):

`<img src="img_girl.jpg" width="500" height="600" />`

# The alt Attribute

The required alt attribute for the `<img>` tag specifies an alternate text for an image:

`<img src="img_girl.jpg" alt="Girl with a jacket" />`

# The style Attribute

The style attribute is used to add styles to an element, such as color, font, size, and more

`<p style="color:red;">This is a red paragraph.</p>`

# The lang Attribute

You should always include the lang attribute inside the `<html>` tag, to declare the language of the Web page.

`<html lang="en">`

# The title Attribute

The title attribute defines some extra information about an element.

`<p title="I'm a tooltip">This is a paragraph.</p>`

# HTML Text Formatting

HTML Formatting Elements
Formatting elements were designed to display special types of text:

- `<b>` Bold text <b>This text is bold</b>

  `<b>This text is bold</b>`

- `<strong>` Important text <strong>This text is important!</strong>

  `<strong>This text is important!</strong>`

- `<i>` Italic text <i>This text is italic</i>

  `<i>This text is italic</i>`

- `<em>` Emphasized text <em>This text is emphasized</em>

  `<em>This text is emphasized</em>`

- `<mark>` Marked text <p>Do not forget to buy <mark>milk</mark> today.</p>

  `<p>Do not forget to buy <mark>milk</mark> today.</p>`

- `<small>` Smaller text <small>This is some smaller text.</small>

  `<small>This is some smaller text.</small>`

- `<del>` Deleted text <p>My favorite color is <del>blue</del> red.</p>

  `<p>My favorite color is <del>blue</del> red.</p>`

- `<ins>` Inserted text <p>My favorite color is <del>blue</del> <ins>red</ins>.</p>

  `<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>`

- `<sub>` Subscript text <p>This is <sub>subscripted</sub> text.</p>

  `<p>This is <sub>subscripted</sub> text.</p>`

- `<sup>` Superscript text <p>This is <sup>superscripted</sup> text.</p>

  `<p>This is <sup>superscripted</sup> text.</p>`

# HTML Comments

`<!-- Write your comments here -->`

# Tables

The `<table>` tag defines an HTML table.

Each table row is defined with a `<tr>` tag.

Each table header is defined with a `<th>` tag.

Each table data/cell is defined with a `<td>` tag.

```
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

<a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table
">see the result</a>

# Lists

An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag.

```
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

An ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag.

```
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

## Description Lists

The `<dl>` tag defines the description list,

the `<dt>` tag defines the term (name),

and the `<dd>` tag describes each term:

```
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

# Symbols

https://www.w3schools.com/html/html_symbols.asp

# Emojis in HTML

- `<meta charset="UTF-8">`

```
<p>I will display A B C</p>
<p>I will display &#65; &#66; &#67;</p>
```

  <p>I will display A B C</p> 
  <p>I will display &#65; &#66; &#67;</p>

```
<p style="font-size:48px">
&#128512; &#128516; &#128525; &#128151;
</p>

```

<p style="font-size:48px">
&#128512; &#128516; &#128525; &#128151;
</p>
