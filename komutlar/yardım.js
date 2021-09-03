const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()

.setColor('RANDOM')
  .setTitle('Sorumlu Bot Yardım Menüsü Diğer Yardım Menüsü için .yardım2')

  .setDescription(`

==============================================
:beginner: | **+sunucu:** = Botun destek sunucusunun linkini gönderir
:beginner: | **+ping:** = botun pingini gösterir
:beginner: | **+yazankazanır:** = verilen cümleyi ilk yazan kazanır
:beginner: | **+davet:** = Botun davet linkini gönderir
:beginner: | **+test:** = botun çalıştığını yada çalışmadığı söyler
:beginner: | **+oylama:** = oyalma yaprsınız
:beginner: | **+yaz:** = istediğiniz yazıyı yazar
:beginner: | **+türk:** = türk gif atar
:beginner: | **+nuke:** = yazılan kanala silip yeniden aynı şekilde kurur
:beginner: | **+kick:** = etiketlediğiniz kişiyi sunucudan atar
:beginner: | **+lafat:** = rastgele kapak laf söyler
:beginner: | **+inek:** = inek gif atar
:beginner: | **+espri:** = espri yapar
:beginner: | **+ban:** = etiketlediğiniz kişiyi banlar
:beginner: | **+unban:** = ID'sini yazdığınız kişinin banını kaldırır
:beginner: | **+ara155:** = polis gelir
:beginner: | **+alkış:** = sizi alkışlar
:beginner: | **+türk:** = türk gif atar
:beginner: | **+a101:** = :D
:beginner: | **+yavaşmod:** = belittiğiniz sayıda kanalı yavaşlatır
===============================================

Bağlantılar 
**» Davet Linki** [Botu Kendi Sunucuna Davet Et](https://discord.com/oauth2/authorize?client_id=875338430618406952&scope=bot&permissions=805314622)
`)

 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["help"]

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}