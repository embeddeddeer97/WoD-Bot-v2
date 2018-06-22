const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {
    if (message.content === 'Ping') {
    	message.reply('WOD Bot has responded............. UNLIKE WOD SUPPORT LOL');
  	}
});

client.on('message', message => {
    if (message.content === 'Hello') {
    	message.reply('hello there, I am the Wings of Duty Bot ');
  	}
});
client.on('message', message => {
    if (message.content === 'Info') {
    	message.reply('Welcome to Wings of Duty Bot (v3), this is a custom bot made by embedded for the wings of duty server and is in its early beta stages. This means few commands may work and bugs may appear ');
  	}
});

client.on('message', message => {
    if (message.content === 'Help') {
    	message.reply('Thank you for contacting support. The following commands may help, Ping, Hello, Info, Help, ');
  	}
});
client.on('message', message => {
    if (message.content === 'Manuyo') {
    	message.reply('OP');
  	}
});
client.on('Message', function(message) {
        client.sendMessage(message.author, "WODBOT sent you a message!");
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


