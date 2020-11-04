<p align="center">
 <img width="20%" height="20%" src="./logo.svg">
</p>

<br />

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
[![spectator](https://img.shields.io/badge/tested%20with-spectator-2196F3.svg?style=flat-square)]()

> Angular components for [blurhash](https://github.com/woltapp/blurhash)

## Installation

### NPM

`npm install --save blurhash ng-blurhash`

### Yarn

`yarn add blurhash ng-blurhash`

## Usage

Import `BlurhashModule` and use the `ng-blurhash` component in your code:

```html
<ng-blurhash hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
             width="128"
             height="128"
             punch="1"
             resolutionX="64"
             resolutionY="64">
</ng-blurhash>
```

For a working example, please refer to the [sample project](https://iffa.github.io/ng-blurhash/).

## Workflow

1. Develop
2. Write tests
3. Run `npm run test:lib` to run library tests
4. Run `npm run commit` and choose commit type
5. Run `npm run release` to create a new release
6. Run `npm run build:lib` to build the library
7. Go to the `dist` directory, and run `npm publish` to publish the library

## Contributors ✨

Thanks to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://iffa.dev/"><img src="https://avatars2.githubusercontent.com/u/759522?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Santeri Elo</b></sub></a><br /><a href="https://github.com/iffa/ng-blurhash/commits?author=iffa" title="Code">💻</a> <a href="https://github.com/iffa/ng-blurhash/commits?author=iffa" title="Documentation">📖</a> <a href="#ideas-iffa" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-iffa" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

---

*Icons made by [photo3idea_studio](https://www.flaticon.com/authors/photo3idea-studio) from [www.flaticon.com](http://www.flaticon.com/ "Flaticon")*
