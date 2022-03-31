# My personal website

---

# Development notes

- TODO: Show language on top of `<pre>` block.
- TODO: Add service worker to support PWA.
- TODO: Fix generate sitemap to include all posts.
- TODO: Enhance SEO with [this package](https://github.com/oekazuma/svelte-meta-tags)
- TODO: Add support for infinite scrolling on blog index page using [this package](https://github.com/skayo/svelte-infinite-loading).

### Topics

- Ta3lab

# Main features

## Images

- ✅ Generating images at build time instead of runtime.
- ✅ Using `sharp` to create different image sizes & formats.

### other images

- ✅ Each post should have all files (including images) in one directory
- ✅ The `generate-images.ts` task will then generate all those images to `/static/posts/{slug}`

# Credits

- [SvelteKit MDsvex Blog Starter](https://github.com/rodneylab/sveltekit-blog-mdx)
