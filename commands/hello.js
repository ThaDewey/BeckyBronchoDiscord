const Discord = require('discord.js');

const colors = require('../colors.json');

const PREFIX = '!';

const superagent = require('superagent')

module.exports.run = async (bot, msg, arg)=>{

	return msg.channel.send("Like hello!");
}

module.exports.config ={
	name: "hello",
	aliases: ["Hello", "hi"]
}