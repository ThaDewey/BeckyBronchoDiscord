const Discord = require('discord.js');

const colors = require('../colors.json');

const PREFIX = '!';

const superagent = require('superagent')

module.exports.run = async (bot, msg, arg)=>{

	let sEmbed = new Discord.RichEmbed()
	.setColor(colors.cyan)
	.setTitle('Server Info')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Regular field title', 'Some value here')
	.addBlankField()
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
msg.channel.send(sEmbed);
}

module.exports.config ={
	name: "serverInfo",
	aliases: ["si", "serverdesc"]
}