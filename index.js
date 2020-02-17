const Discord = require('discord.js');
const colors = require('./colors.json');

const bot = new Discord.Client();

const PREFIX = '!';

const superagent = require('superagent')



const token = process.env.HEROKU;

bot.on('ready', () => {
	console.log('Bot is online');
});


const fs = require('fs');
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
	if (err) { console.log("Error: ".err); }
	//console.log("f:".files.length);

	let jsFile = files.filter(f => f.split(".").pop() === "js")


	if (jsFile.length <= 0) {
		return console.log("[LOGS] couldnt't Find commands! ");
	}

	jsFile.forEach((f, i) => {
		let pull = require("./commands/" + f);
		bot.commands.set(pull.config.name, pull);
		pull.config.aliases.forEach(alias => {
			bot.aliases.set(alias, pull.config.name)
		});
	});
});


bot.on('message', async msg => {
	if (msg.author.bot || msg.channel.type === "dm") {
		return;
	}

	let prefix = PREFIX;
	let msgArray = msg.content.split(" ");
	let cmd = msgArray[0];
	let arg = msgArray.slice[1];
	let commandFile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(prefix.length));

	if (commandFile) { commandFile.run(bot, msg, arg); }

});

bot.login(token);		