const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
               message.channel.send('🏓 Pong ! ' + `\`${bot.ws.ping}\` ms.`);
               console.log(`✅ | Commande ping executé.`)
}

module.exports.help = {
  name:"ping"
}