const emojisList = require('emojis-list');
const fs = require('fs');

const generateEmojiTypings = () => {
  const values = []
  emojisList.forEach(emoji => {
    values.push(`"${emoji}"`);
  });
  return `export type Emoji=${values.join("|")};`
}

fs.writeFileSync('index.ts', generateEmojiTypings());
