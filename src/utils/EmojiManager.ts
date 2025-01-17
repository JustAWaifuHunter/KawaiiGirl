import EmojiUtils from "./EmojiUtils.json";

export type emojiName = keyof typeof EmojiUtils;

export default {
  get: (name: emojiName) => {
    const emoji = EmojiUtils[name];
    if (emoji) {
      const emote = emoji
        .replace("<a", "")
        .replace("<", "")
        .replace(">", "")
        .split(":");

      return {
        name: emote[0],
        id: emote[1],
        reaction: `${emote[0]}${emoji[1] ? `:${emote[1]}` : ""}`,
        mention: emoji,
      };
    } else {
      return {
        name: "bug",
        id: "🐛",
        reaction: "🐛",
        mention: "🐛",
      };
    }
  },
};
