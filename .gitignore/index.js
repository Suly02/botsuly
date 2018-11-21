const Discord = require('discord.js');
var bot = new Discord.Client();

const low=require('lowdb');
const FileSync=require('lowdb/adapters/FileSync');
const adapter=new FileSync('database.json');
const db=low(adapter);



db.defaults({histoires: []})
    .write()

    var prefixe=("/");
    var randnum=0;
    bot.on('ready', () => {
        bot.user.setPresence({game: { name: 'brûler du feuj', type: 0 }});
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
            if (message.content=== prefixe+"HeilTonin"){ //répond en mentionnant la personne avec un @
                message.reply("Tonin n'est pas un vrai, au bûcher pd");
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

            if (message.content=== "Comment vas-tu Bot SW ?"){ //répond en mentionnant la personne avec un @
                random();
                if (randnum == 0){
                    message.reply("Je suis en pleine forme, merci !")
                }
                if (randnum == 1){
                    message.reply("Je vais très bien, merci !")
                }
                if (randnum == 2){
                    message.reply("Pas terrible en ce moment :/")
                }
                console.log(randnum);
            }

            if (!message.content.startsWith(prefixe)) return;
            var args=message.content.substring(prefixe.length).split(" ");


            switch (args[0].toLowerCase()){
                case "newstory":
                var value= message.content.substr(10);
                var author=message.author.id;
                var number=db.get('histoire').map('id').value();
                console.log(value);
                message.reply("Ajout de l'histoire à la base de données")

                db.get('histoires')
                .push({ id: number +1, story_value: value, story_author: author})
                .write();
                break;
            }


    });

    function random(min,max){ //génère un nombre random entre 1 et 2
        min=Math.ceil(0);
        max=Math.floor(3);
        randnum=Math.floor(Math.random() * (max - min +1) + min);
    }

