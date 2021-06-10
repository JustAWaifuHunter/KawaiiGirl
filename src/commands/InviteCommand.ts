import { CommandListener, ColorUtils, CommandContext } from '../utils'
import { IllyaClient } from '../Client'
import { MessageEmbed, Message } from 'discord.js'

module.exports = class InviteCommand extends CommandListener {
  constructor(client: IllyaClient) {
    super(client, {
      name: 'invite',
      aliases: ['convite'],
      category: 'utils',
      description: 'Envia o meu convite para você no seu privado'
    })
  }

  run(message: Message, args: Array<string>, ctx: CommandContext) {
    const embed = new MessageEmbed()
    embed.setColor(ColorUtils['pink'])
    embed.setThumbnail(this.client.user.avatarURL({ dynamic: true }))
    embed.addField("Convite", `Aqui está o meu [convite](https://discord.com/oauth2/authorize?client_id=481282441294905344&scope=bot&permissions=1580723278), espero que você se divirta me usando. (Não pense besteira -.-)`)
    embed.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
    embed.setFooter(this.client.user.username, this.client.user.avatarURL({ dynamic: true }))

    message.author.send(embed).then(() => {
      ctx.quote('inbox_tray', 'verifique o seu privado, eu enviei o meu convite lá! :heart:')
    }).catch(() => {
      ctx.quote('error', 'eu não consegui enviar nada no seu privado, parece que ele está fechado.')
    })
  }
}