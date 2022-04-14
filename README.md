# Computly website

![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.computly.me&color=00ec0a)
![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Fwww.computly.me&color=4ba62c)
![Mozilla HTTP Observatory Grade](https://img.shields.io/mozilla-observatory/grade-score/computly.me?publish&color=2034b6)

[![CI/CD](https://github.com/computly/computly/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/computly/computly/actions/workflows/ci-cd.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=computly_computly&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=computly_computly)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=computly_computly&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=computly_computly)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=computly_computly&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=computly_computly)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=computly_computly&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=computly_computly)

![LICENSE](https://img.shields.io/github/license/computly/computly?style=flat&color=fcdaff)
![GitHub issues](https://img.shields.io/github/issues/computly/computly?color=fdf629)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/computly/computly?color=c4fff9&label=Repo%20size)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/computly/computly)
![GitHub last commit](https://img.shields.io/github/last-commit/computly/computly?color=9897fc)
![Lines of code](https://img.shields.io/tokei/lines/github/computly/computly?color=e63977)

[![HitCount](https://hits.dwyl.com/computly/computly.svg?style=flat&show=unique)](http://hits.dwyl.com/computly/computly)
![Discord](https://img.shields.io/discord/963931940522704966?color=fffffa)
![Twitter Follow](https://img.shields.io/twitter/follow/computly?style=social)

# TO-DO

- TODO: Add `target=_blank` and `rel=external` to external links..
  There are two ways to do this: at runtime using `hooks.ts` but this adds a lot of overhead.
  The other way is at build time, and this needs some research (A vite plugin maybe?).
- TODO: Show language on top of `<pre>` block.
- TODO: Dynamically add link before headers in README without the need to write `id` like Github.
- TODO: Add service worker to support PWA.
- TODO: Add support for infinite scrolling on blog index page using [this package](https://github.com/skayo/svelte-infinite-loading).
- TODO: Review security advisories from [Mozilla observatory tool](https://observatory.mozilla.org/analyze/computly.me)

## Notes:

**Why using Github actions?**

I'm using CI/CD to deploy to vercel instead of their integrated tool, because I ran into an issue where I thought there was a problem with my dependencies, but after 5 days of trial and errors, I tried setting the project to use `npm` instead of `pnpm`, the issue went away.

## Thanks to

- [SvelteKit MDsvex Blog Starter](https://github.com/rodneylab/sveltekit-blog-mdx)
