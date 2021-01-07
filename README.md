# emoji-type

> This is just a TypeScript package with types and values for every recent emoji.

## Installation

### NPM

```sh
$ npm install --save emoji-type
```

### Yarn

```sh
$ yarn add emoji-type
```

## Usage

### With require

```js
const {Emoji, EmojiLibrary} = require('emoji-type');
```

### With ES6 import

```ts
import {Emoji, EmojiLibrary} from 'emoji-type';
```

## Usage

```ts
import {Emoji, EmojiLibrary} from 'emoji-type';
const icon: Emoji = EmojiLibrary.animals_nature.animal_mammal.dog;  // "🐕";
```

## Related

You can find other packages which provide Emoji values and utility functions.

- [emojis-list](https://www.npmjs.com/package/emojis-list) - Complete list of standard Unicode Hex Character Code that represent emojis.
- [emojis-unicode](https://github.com/Kikobeats/emojis-unicode) – Complete list of standard Unicode codes that represent emojis.
- [emojis-keywords](https://github.com/Kikobeats/emojis-keywords) – Complete list of am emoji shortcuts.
- [is-emoji-keyword](is-emoji-keyword) – Check if a word is a emoji shortcut.
- [is-standard-emoji](https://github.com/kikobeats/is-standard-emoji) – Simply way to check if a emoji is a standard emoji.
- [trim-emoji](https://github.com/Kikobeats/trim-emoji) – Deletes ':' from the begin and the end of an emoji shortcut.

## License

MIT © [Anthony Yang](https://github.com/anthonyyangdev)
