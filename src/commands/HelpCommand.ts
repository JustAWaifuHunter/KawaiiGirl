import { ColorResolvable, Message, MessageEmbed } from "discord.js";
import { IllyaClient } from "../Client";
import { CommandListener, ColorUtils, CommandContext } from "../utils";

export default class AvatarCommand extends CommandListener {
  constructor(client: IllyaClient) {
    super(client, {
      name: "ajuda",
      aliases: ["help"],
      category: "misc",
      description: "Envia algumas formas de suporte para você.",
    });
  }

  async run(message: Message, args: Array<string>, ctx: CommandContext) {
    const embed = new MessageEmbed();
    embed.setAuthor(
      message.author.username,
      message.member.user.avatarURL({ dynamic: true })
    );
    embed.setFooter(
      this.client.user.username,
      this.client.user.displayAvatarURL({ dynamic: true })
    );
    embed.setColor(ColorUtils["pink"] as ColorResolvable);
    embed.addField(
      this.client.user.username,
      `Olá, eu sou a ${this.client.user.username} e sou apenas mais um simples bot para o discord focado em música e moderação, se precisa de ajudar você é bem vindo(a) no [meu servidor](https://discord.gg/CAm9cSU) de suporte, e se precisa de ajuda com os meus comandos, use **${process.env.PREFIX}comandos**, aproveita e da **${process.env.PREFIX}convite** para poder me adicionar em seu servidor. \nBom uso e divertimento :heart:`
    );
    message.author
      .send({ embeds: [embed] })
      .then(() => {
        ctx.quote("inbox_tray", "verifique o seu privado! :wink:");
      })
      .catch(() => {
        ctx.quote(
          "error",
          "eu não consegui enviar nada no seu privado, parece que ele está fechado."
        );
      });
  }
}
