const Discord = require('discord.js');

const colors = require('../colors.json');

const PREFIX = '!';

const superagent = require('superagent')

module.exports.run = async (bot, msg, arg) => {

	let sEmbed = new Discord.RichEmbed()
		.setColor(colors.red_light)
		.setTitle('User Info')
		.setThumbnail(msg.guild.iconURL)
		.setAuthor(`${msg.author.username} Info`, msg.author.displayAvatarURL)
		.addField("**Username:**", `${msg.author.username}`, true)
		.addField("**Discriminator:**", `${msg.author.discriminator}`, true)
		.addField("**ID:**", `${msg.author.id}`, true)
		.addField("**Status:**", `${msg.author.presence.status}`, true)
		.addField("**Created At:**", `${msg.author.createdAt}`, true)
		.setFooter(`TestBot | Footer`, bot.user.displayAvatarURL);
	msg.channel.send(sEmbed);
}

module.exports.config = {
	name: "userInfo",
	aliases: ["ui", "userdesc"]
}