const Discord = require('discord.js');

var bot = new Discord.Client();
var prefixe=("/");

    bot.on("ready", () => {
        bot.user.setPresence({game: { name: 'se triturer la bistouquette', type: 0 }});
        bot.user.setUsername("Führer");
        console.log("Bot Ready");
    });
    
    bot.login(process.env.TOKEN);


    bot.on('message', message=> {
        if (message.content=== "ping"){ 
            //message.reply("pong"); répond en mentionnant la personne avec un @
            message.channel.send("pong");
        }
        if (message.content === prefixe+"ping"){
           message.channel.send('Pong! ' + Math.round(bot.ping)+ 'ms!')
           //message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");   
        }

        if (message.content=== "Que penses-tu de Nex ?"){  //répond en mentionnant la personne avec un @
            message.reply("Je trouve qu'elle est très vilaine");
        }
        if (message.content=== "T'es une fille BOT SW?"){  //répond en mentionnant la personne avec un @
            message.reply("Non, je suis assexué comme Rem");
        }
        if (message.content=== "Heil"){ //répond en mentionnant la personne avec un @
            message.reply("Sieg Heil my Führer");
        }

        if (message.content === prefixe+"help"){
            var help_embed= new Discord.RichEmbed()
            .setColor('D1F22C')
            .addField("Commande du bot !", " -/help : Affiche les commandes du bot !")
            .addField("Ping :", "Le bot répond "+ "pong")
            .setFooter("Ce bot est génial") //permet d'ajouter un texte en plus petit
            message.channel.sendEmbed(help_embed);
            //message.channel.sendMessage("Voici les commandes du bot:\n ./help pour afficher les commandes") //permet d'afficher le message dans le channel 
            console.log("Commande help demandée")
        }

       

        


});
