const Discord = require('discord.js');

const colors = require('../colors.json');

const PREFIX = '!';

const superagent = require('superagent')

module.exports.run = async (bot, msg, arg)=>{

	let message = await msg.channel.send("gettin' a cat pic ");

	let { body } = await superagent.get('https://api.thecatapi.com/v1/images/search');
	//console.log(body[0]['url']);
	if (!{ body }) {
		return msg.channel.send("Oh, Hell's no, like the cats disappeared. No one gets any cats!");
	}

	let cEmbed = new Discord.RichEmbed()
		.setColor(colors.cyan)
		.setAuthor('Becky Broncho CATS!', message.guild.iconURL)
		.setImage(body[0]['url'])
		.setTimestamp()
		.setFooter("Becky", bot.user.displayAvatarURL)
	msg.channel.send(cEmbed)
	msg.delete();
}

module.exports.config ={
	name: "cat",
	aliases: ["cats", "Cat","meow"]
}