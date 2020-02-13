const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'Njc3MzQ0MDc4MTU3MDUzOTYy.XkTajA.EVTg0FUpIs1jhRKqTBbC6JercUg';

const PREFix = '!';

bot.on('ready', () => {
	console.log('Bot is online');
});

bot.on('message', msg => {
	let args = msg.content.substring(PREFix.length).split(" ");


	switch (args[0]) {
		case 'ping':
			msg.reply("!!PONG!!!");
			break;
		case 'websites':
			msg.channel.send('link to website');
			break;
		case 'info':
			if (args[1] === 'version') {

				msg.channel.send('version 1.1.1');
			} else {

				msg.channel.send('shut up');
			}

			break;
		case 'embed':
			const embed = new Discord.RichEmbed().addField('Player Name', msg.author.username);
			msg.channel.sendEmbed(embed);
			break;
		default:
			msg.channel.send('Like, sorry. I dont know about that.');
			break;
	}


	if (msg.content === "HELLO") {
		msg.reply('Hello Friend');

	}


});


bot.login(token);