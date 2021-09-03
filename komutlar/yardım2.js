const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()

.setColor('RANDOM')
  .setTitle('Sorumlu Bot Yardım Menüsü Diğer Yardım Menüsü için .yardım')

  .setDescription(`

==============================================

:beginner: | **+atatürk:** = NE MUTLU TÜRKÜM DİYENE !!
:beginner: | **+token:** = tokenimi görürsün
:beginner: | **+sunucu-bilgi:** = sunucuhakkında bilgi verir
:beginner: | **+sil:** = belittiğiniz sayıda mesaj siler
:beginner: | **+pp:** = avatarınızı gsterir
:beginner: | **+üyedurum:** = toplam üye sayısını göterir
:beginner: | **+sunucu-resmi:** = sunucunun resmini gösterir
:beginner: | **+id:** = istediğiniz kişinin idsini verir
:beginner: | **+kralol:** = kral olursun
:beginner: | **+kedi:** = kedi gif 
:beginner: | **+oy:** = oy linkimi veiririm
:beginner: | **+salak:** = salak gif atar :D
:beginner: | **+bansay:** = toplam ban sayısını gösterir
:beginner: | **+yapımcım:** = yapımcımı gösterir
:beginner: | **+aşkölçer:** = etiketleiğiniz kişiyle aşk derecenizi gösterir
:beginner: | **+istatistik:** = botun bilgisini gösterir
:beginner: | **+gönder:** = botun yapımcısına bot hakkında istek-bug-şikayet bildirirsiniz
:beginner: | **+yazı-tura:** = yazı tura oynarsınız
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

  aliases: ["help2"]

}

exports.help = {

  name: 'yardım2',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım2'

}