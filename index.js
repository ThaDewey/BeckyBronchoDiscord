const Discord = require('discord.js');
const colors = require('colors.json');

const bot = new Discord.Client();

const PREFIX = '!';



const token = process.env.HEROKU;

bot.on('ready', () => {
	console.log('Bot is online');
});

bot.on('message', async msg => {
	if (msg.author.bot || msg.channel.type === "dm") {
		return;
	}

	let prefix = PREFIX;
	let msgArray = msg.content.split(" ");
	let cmd = msgArray[0];
	let arg = msgArray.slice[1];
	console.log(msgArray);


	if (cmd === prefix + 'hello') {
		console.log("hello");
		return msg.channel.send("Hello");
	}


	if (cmd === prefix + 'serverInfo') {
		let sEmbed =  new Discord.RichEmbed()
		.setColor(colors.cyan)
		.setTitle('Some title')
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



});

bot.login(token);		