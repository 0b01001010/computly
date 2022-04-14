# Computly website

![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.computly.me&color=fedcba)
![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Fwww.computly.me&color=4ba62c)
![Mozilla HTTP Observatory Grade](https://img.shields.io/mozilla-observatory/grade-score/computly.me?publish&color=2034b6)

![LICENSE](https://img.shields.io/github/license/computly/computly?style=flat&color=fcdaff)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/computly/computly)
![GitHub last commit](https://img.shields.io/github/last-commit/computly/computly?color=9897FC)
![GitHub issues](https://img.shields.io/github/issues/computly/computly?color=fdf629)

![Twitter Follow](https://img.shields.io/twitter/follow/computly?style=social)
![Discord](https://img.shields.io/discord/963931940522704966?color=fffffa)

# Development notes

- TODO: Add `target=_blank` and `rel=external` to external links..
  There are two ways to do this: at runtime using `hooks.ts` but this adds a lot of overhead.
  The other way is at build time, and this needs some research (A vite plugin maybe?).
- TODO: Show language on top of `<pre>` block.
- TODO: Dynamically add link before headers in README without the need to write `id` like Github.
- TODO: Add service worker to support PWA.
- TODO: Add support for infinite scrolling on blog index page using [this package](https://github.com/skayo/svelte-infinite-loading).
- TODO: Review security advisories from [Mozilla observatory tool](https://observatory.mozilla.org/analyze/computly.me)

## Thanks to

- [SvelteKit MDsvex Blog Starter](https://github.com/rodneylab/sveltekit-blog-mdx)
