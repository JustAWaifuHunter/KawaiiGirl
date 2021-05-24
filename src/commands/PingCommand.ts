import { Message } from 'discord.js'
import { IllyaClient } from '../Client'
import { CommandListener } from '../utils'

module.exports = class PingCommand extends CommandListener {
  constructor(client: IllyaClient) {
    super(client, {
      name: 'ping',
      aliases: [],
      permissions: [{
        entity: 'bot',
        permissions: ['SEND_MESSAGES']
      }]
    })
  }

  async run(message: Message, args: string[]) {
    const msg = await message.channel.send('<a:carregando:846196201657598003> Calculando...')
    await msg.edit(`:ping_pong: **|** ${message.author.toString()}, meu ping é \`${Math.round(this.client.ws.ping)}\`ms! A latência da API é \`${msg.createdTimestamp - message.createdTimestamp}\`ms!`)
  }
}