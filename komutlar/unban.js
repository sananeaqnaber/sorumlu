const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new MessageEmbed().setDescription(`:negative_squared_cross_mark: **Malesef Yeterli Yetkiniz Bulunmamakta.**`))
    let user = args[0];
    const banList = await message.guild.fetchBans();
    if (!user || isNaN(user) || !banList.has(user)) {
        return message.channel.send(new MessageEmbed().setColor('#7289DA').setDescription(`:crescent_moon: **Kullanıcı ID'si Hatalı Veya Kullanıcı Sunucuda Yasaklı Değil.**`))
    }
    message.guild.members.unban(user);
    message.channel.send(new MessageEmbed().setColor('#7289DA').setDescription(`:white_check_mark: **İşlem Başarılı.**`))
};

exports.conf = {
    aliases: ["un-ban"]
};

exports.help = { //sharpen
    name: 'unban'
};