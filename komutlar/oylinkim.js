const Discord = require ("discord.js");
exports.run = (client, message) => {
    let deathhcodeteam = new Discord.MessageEmbed()
    .setDescription('Yakında açılcak..')
    message.channel.send(deathhcodeteam)
    };
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: ['oy-linkim'], 
    permLevel: 0 
};
  exports.help = {
    name: 'oy', 
    description: 'Oy linki', 
    usage: 'oy'
};