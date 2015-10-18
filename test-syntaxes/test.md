# Statical
This is a static site starter that uses:

- Jade
- Gulp
- Stylus
- PostCSS
- Browserify/Watchify/Babelify

---
## Requirements

You must **have** Node 4+ *installed*. [Node](https://nodejs.org/en/)


---

## Gulp tasks

`gulp`

This will compile everything and open the project in the browser for you. It will also watch for changes and refresh the browser on every save.

`gulp ghp`
This is used to copy all the files in the `dist` directory to the `gh-pages` branch for displaying the site.

---
## PostCSS
PostCSS is rad. And PostStylus make is a piece of cake to add PostCSS plugins to your build process. Here are some of the rad PostCSS plugins being used:


[postcss-clearfix](http://github.com/seaneking/postcss-clearfix)

```css
.foo {
  clear: fix; /* IE8+ */
}

.bar {
  clear: fix-legacy; /* IE6+ */
}
```
Compiles to:

```css
.foo:after{
  content: '';
  display: table;
  clear: both;
}

.bar:before,
.bar:after {
  content: '';
  display: table;
}
.bar:after {
  clear: both;
}
.bar {
  zoom: 1;
}
```


[postcss-quantity-queries](https://github.com/pascalduez/postcss-quantity-queries)

```css
ul > li:at-least(4) {
  color: rebeccapurple;
}
```

```css
ul > li:at-most(4) {
  color: rebeccapurple;
}
```

```css
ul > li:between(4, 6) {
  color: rebeccapurple;
}
```

```css
ul > li:exactly(4) {
  color: rebeccapurple;
}
```
