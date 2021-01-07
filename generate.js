const axios = require("axios");

const fs = require('fs');
require('dotenv').config();

const EMOJI_API_KEY = process.env.EMOJI_API_KEY;

if (EMOJI_API_KEY) {
  const emojiLibrary = {};
  const url = `https://emoji-api.com/emojis?access_key=${EMOJI_API_KEY}`;

  const sanitize = (value) => value
    .replaceAll(" ", "_")
    .replaceAll("-", "_")
    .replaceAll(":", "_")
    .replaceAll("’", "")
    .replaceAll("ñ", "n")
    .replaceAll("“", '')
    .replaceAll("”", '')
    .replaceAll("Å", "A")
    .replaceAll("é", "e")
    .replaceAll("í", "i")
    .replaceAll("ã", "a")
    .replaceAll("ô", "o")
    .replaceAll("ç", "c")
    .replaceAll("&", "")
    .replaceAll(".", "")
    .replaceAll("!", "")
    .replaceAll("__", "_")
  ;

  axios.get(url).then(response => {
    const emojisList = {};
    const emojis = response.data;
    emojis.forEach(obj => {
      const {unicodeName: unicodeNameValue, character, group: groupValue, subGroup: subGroupValue} = obj;
      const unicodeName = sanitize(unicodeNameValue);
      const group = sanitize(groupValue);
      const subGroup = sanitize(subGroupValue);
      if (!(group in emojiLibrary)) {
        emojiLibrary[group] = {};
      }
      const subLibrary = emojiLibrary[group];

      if (!(subGroup in subLibrary)) {
        subLibrary[subGroup] = {};
      }
      const subSubLibrary = subLibrary[subGroup];
      subSubLibrary[unicodeName] = character;
      emojisList[character] = true;
    });
    const code = `export const EmojiLibrary: any = ${JSON.stringify(emojiLibrary, undefined, 2)}`;
    fs.writeFileSync("./src/EmojiLibrary.ts", code);

    const generateEmojiTypings = () => {
      return `import * as lib from './src/EmojiLibrary';\nexport const EmojiLibrary = lib.EmojiLibrary;\nexport type Emoji=${Object.keys(emojisList).map(x => `"${x}"`).join("|")};`
    }
    fs.writeFileSync('index.ts', generateEmojiTypings());
  });
}
