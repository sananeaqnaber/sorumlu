const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const yetkihata = new Discord.MessageEmbed()
    .setColor('#7289DA')
    .setDescription('**:negative_squared_cross_mark: Bu İşlem İçin Gerekli Yetkiniz Bulunmamaktadır.**')
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(yetkihata)

let channel = message.mentions.channels.first() || message.channel;
const uyg = new Discord.MessageEmbed()
.setColor("#7289DA")
.setDescription(":white_check_mark: **Nuke İşlemi Uygulanıyor.**")
 message.channel.send(uyg);
  
  const nuke = new Discord.MessageEmbed()
    .setDescription(`**:white_check_mark: ・ Kanal Başarıyla Silindi.**`)
    .setColor('#7289DA')
    let position = channel.position;
    setTimeout(() => {
    channel.delete();
    channel.clone().then(msg => {
    msg.setPosition(position);
    msg.send(nuke);
});
}, 280)

  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'nuke'
};