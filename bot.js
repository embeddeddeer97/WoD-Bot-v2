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


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

// get role by ID
let myRole = message.guild.roles.get("264410914592129025");


//roles

// get role by name
let myRole = message.guild.roles.find("name", "Admin");

//prefix test


const commando = require('discord.js-commando');
const prefix = "1";
const bot = new commando.Client({
    commandPrefix: prefix
});

bot.registry.registerGroup('random', 'Random');
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('Botcode'
);





