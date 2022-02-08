# My personal website

---

# Development notes

## Blog

> This is my implementation of [Sveltekit-blog-mdx starter project](https://github.com/rodneylab/sveltekit-blog-mdx)

### PaperCSS

- Enable dark mode by adding the `dark` class to `<html>` element.

### Interesting dependencies

- [vite-imagetools](https://github.com/JonasKruckenberg/imagetools)
  > Load and transform images using a toolbox of custom import directives
- [sharp](https://github.com/lovell/sharp)
  > High performance image processing, resize JPEG, PNG, WebP, AVIF and TIFF images.
- [dayjs](https://github.com/iamkun/dayjs)
  > Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API. If you use Moment.js, you already know how to use Day.js.
- [front-matter](https://github.com/jxson/front-matter)
  > Extracts YAML front matter from markdown files.
- [mdsvex](https://github.com/pngwn/MDsveX)
  > A markdown preprocessor for Svelte.
- [object-hash](https://github.com/puleos/object-hash)
  > Generate hashes from javascript objects in node and the browser.
- [vanilla-lazyload](https://github.com/verlok/vanilla-lazyload)
  > Lightweight, flexible script that speeds up websites by deferring the loading of below-the-fold images, backgrounds, videos, iframes and scripts to when they will enter the viewport.
  > Written in plain JavaScript, it leverages IntersectionObserver, supports responsive images and enables native lazy loading

# Main features

## Images

- Generating images at build time instead of runtime.
- Using `sharp` to create different image sizes & formats.

### other images
- Each post should have all files in one directory
- The `generate-responsive-images` task will then generate all those images to `/static/blog/posts/{slug}`

# Credits

- [SvelteKit MDsvex Blog Starter](https://github.com/rodneylab/sveltekit-blog-mdx)
  > This is the backbone of my blog.
  > I changed styling and added other features.
