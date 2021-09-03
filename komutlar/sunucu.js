const Discord = require("discord.js");

exports.run = (client, message) => {

const mhelp = new Discord.MessageEmbed()
.setColor('#7289DA')
.setDescription(`**Botun destek sunucusuna yönlendirilmek için ・ **[Tıkla](https://discord.gg/GVvM7vz3bD) `)  
message.channel.send(mhelp)

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["Davet"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'sunucu', 
    description: 'Botun destek sunucusu',
    usage: 'sunucu'
  };