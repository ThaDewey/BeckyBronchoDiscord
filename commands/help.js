const Discord = require('discord.js');
const colors = require('../colors.json');

const PREFIX = '!';

const superagent = require('superagent')

module.exports.run = async (bot, msg, args)=>{
console.log(args[0]);
	if(args[0] == "help"){

		return msg.channel.send('Just do ' + PREFIX + ' help instead.');
	}

	if (args[0]) {
		let command = args[0];
		if (bot.commands.has(command)) {
			command = bot.commands.get(command);
			var sendHelpEmbed = new Discord.RichEmbed()
				.setColor(colors.cyan)
				.setAuthor('TestBot HELP', msg.guild.iconURL)
				//.setDescription('The Bot PRefix is:' + PREFIX + '\n\n *Command:*'+ command.config.description+ '\n\n**Usage:**'+command.config.usage ||+ 'No Usage')
				.setDescription(`The bot prefix is:  ${PREFIX}\n\n**Command** ${command.config.name}\n **Description ** ${command.config.description || "No Description"}\n **Usage:**\n\n ${command.config.usage || "No Usage"}\n\n**Accesssible By:**\n\n${command.config.accessableby || "Members"}\n\n**Aliases:**\n\n ${command.config.noalias || command.config.aliases} `)
				msg.channel.send(sendHelpEmbed);
		}
	}
	if(!args[0]){
		let embed = new Discord.RichEmbed()
		.setAuthor('Help Command!', msg.guild.iconURL)
		.setColor(colors.redlight)
		.setDescription(`${msg.author.username} check your dms!`)

		let sEmbed = new Discord.RichEmbed()
		.setColor(colors.cyan)
		.setAuthor('testBot Help',msg.guild.iconURL)
		.setThumbnail(bot.user.displayAvatarURL)
		.setTimestamp()
		.setDescription(`these are the available commnds for Becky. \n to get Becky's attention the prefix is:${PREFIX} `)
		.addField(`Commands:`,"`cat` `help` `serverInfo` `userInfo`")
		.setFooter(`Becky 2k18`, bot.user.displayAvatarURL)
		msg.channel.send(embed).then(m => m.delete(1000));
		msg.author.send(sEmbed);
	}
}

module.exports.config ={
	name: "help",
	aliases: ["h", "halp","commands"],
	description: "",
	usage: "!usage",
	accessableby:"members"
}