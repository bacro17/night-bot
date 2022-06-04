const Discord = require('discord.js')
require("doten").config()

const bot =new Discord.Client();

bot.on('ready', () =>{
    console.log('Bot online')
})

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '!';
    // !ban user reason ['user', 'reason']
    // hello
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)
    

    if(!message.content.startsWith(prefix)) return;

    if(cmd == 'hello') {
        let member = message.mentions.members.first();
        if (!member) { message.channel.send('hello');} else {
            message.channel.send(`Hello ${ member.user.tag}`)
        }
        
    }
    
})

bot.login("process.env.TOKEN")









































































































































































