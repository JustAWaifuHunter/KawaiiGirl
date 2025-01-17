import Discord from "discord.js";
import { IllyaClient } from "../../Client";
import EmojiManager, { emojiName } from "../EmojiManager";

export class CommandContext {
  client: IllyaClient;
  message: Discord.Message;
  constructor(client: IllyaClient, message: Discord.Message) {
    this.client = client;
    this.message = message;
  }

  async quote(emoji: emojiName, content: string) {
    return this.message.reply(
      `${EmojiManager.get(emoji).mention} **|** ${
        this.message.author
      }, ${content}`
    );
  }

  async getUser(target: string, author?: boolean) {
    if (!target) {
      if (author) return this.message.author;
      return undefined;
    }

    try {
      const member = await this.client.users.fetch(
        `${BigInt(target.replace(/[<@!>]/g, ""))}`
      );
      return member;
    } catch {
      if (author) return this.message.author;
      return undefined;
    }
  }
}
