const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Ping') {
    	message.reply('pong');
  	}
});
client.on('message', message => {
    if (message.content === 'Hello') {
    	message.reply('hello there, I am the Wings of Dut Bot ');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
