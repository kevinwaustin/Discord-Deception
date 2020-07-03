const { MessageEmbed } = require('discord.js')
const commandList = new MessageEmbed()
  .setColor('#8c9eff')
  .setTitle('Discord Deception Bot Commands:')
  .setURL('https://github.com/trevorliu13/Discord-Deception')
  .setThumbnail('https://i.imgur.com/IchybTu.png')
  .addFields({
    name: '**Commands:**',
    value:
      '```diff\n' +
      '?help: have helping hand\n' +
      '?ping: Pong!\n' +
      '?mafia: masked men mysteriously murder many mates midst meetings & marshal meddling\n' +
      '```',
  })

module.exports = msg => {
  msg.channel.send(commandList)
}
