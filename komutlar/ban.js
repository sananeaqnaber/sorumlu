const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':negative_squared_cross_mark: **Malesef Yeterli Yetkiniz Bulunmamakta.**')
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send(':negative_squared_cross_mark: **Lütfen Bir Kullanıcı Etiketleyiniz.**')
  let sebep = args.slice(1).join(" ")
if(!sebep) return message.channel.send(`:negative_squared_cross_mark: **Lütfen Bir Sebep Belirtiniz.**`)
 // let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   member.ban(member)                        //sharpen
   let embed = new Discord.MessageEmbed()
   .setColor('#7289DA')
  .setTitle(`${member.user.tag} Sunucudan Yasaklandı.`,member.user.avatarURL())
   .setDescription(`**:white_check_mark:
   Sebep ・ ** ${sebep}`)
   message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0  //sharpen
}

exports.help = {
  name: 'ban',
    description: '',
    usage: 'banla'
}