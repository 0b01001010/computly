# Computly website

# Development notes

- TODO: Add `target=_blank` and `rel=external` to external links..
  There are two ways to do this: at runtime using `hooks.ts` but this adds a lot of overhead.
  The other way is at build time, and this needs some research (A vite plugin maybe?).
- TODO: Show language on top of `<pre>` block.
- TODO: Dynamically add link before headers in README without the need to write `id` like Github.
- TODO: Add service worker to support PWA.
- TODO: Add support for infinite scrolling on blog index page using [this package](https://github.com/skayo/svelte-infinite-loading).
- TODO: Check if it's possible to generate `_info.json` in `/static` folder. the benefits of this is to keep those files outside of git, but the down side is that they will be exposed to the public (which isn't a deal breaker anyways).
- TODO: Fix a possible UI unexpected behaviour when switching theme sometimes the page jumps some distance above. Full warning in console (`Scroll anchoring was disabled in a scroll container because of too many consecutive adjustments (10) with too little total distance (0 px average, 0 px total).`).

## Thanks to

- [SvelteKit MDsvex Blog Starter](https://github.com/rodneylab/sveltekit-blog-mdx)
