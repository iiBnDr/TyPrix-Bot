const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : :ok_hand: عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$bc | TyPrixTM Shop`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`🌹  ولكم نورت السيرفر🌹 
👑اسم العضو  ${member}👑  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('$ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });

client.on('message', message => {
 
    if (message.content === "$mutechat") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {
               message.reply("تم تقفيل الشات ✅ ")
           });
             }
//™¦༺♚ƙἶղց|MaS♚༺¦™#7105
if (message.content === "$unmutechat") {
    if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
               message.reply("تم فتح الشات✅")
           });
             }
 
 
 
});

client.on('message', message => {
  if (true) {
if (message.content === '$invite') {
      message.author.send('  https://discordapp.com/api/oauth2/authorize?client_id=522386598726336513&permissions=8&scope=bot    ').catch(e => console.log(e.stack));
 
    }
   }
  });
 
 
client.on('message', message => {
     if (message.content === "$invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
var prefix = "$"
    if (message.content.startsWith(prefix + 'clear')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ليس لديك برمشن[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``✏️✅ تــم مسح الشات ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(3000)});
  };
  
  });


client.on('message', message =>{
    let args = message.content.split(' ');
    if(args[0] === `${$}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});


const HeRo = new Discord.Client();
client.on('message', message => {
var prefix = "$";

    if (message.content === prefix + "date") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**!~[ التاريخ ]~! **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( ""+ Day + "-" + Month + "-" + Year + "")
             message.channel.sendEmbed(Date15);
    }
});


client.on("message",async message => {
  var one;
  var two;
  var three;
  var aa;

  if(message.content.startsWith(prefix + "slots")) {
      if(message.content.split(' ')[0] !== `${$}slots`) return;
    var first = ["🍊", "🍇", "🍒", "🍎", "🍋"];
    var second = ["🍊", "🍇", "🍒", "🍎", "🍋"];
    var third = ["🍊", "🍇", "🍒", "🍎", "🍋"];

    one = first[Math.floor(Math.random () * first.length) + 0];
    two = second[Math.floor(Math.random() * second.length) + 0];
    three = third[Math.floor(Math.random() * third.length) + 0];
    if(one === two && two === three) {
      aa = "لقد فزت";
    } else {
      aa = "لقد خسرت";
    }

    message.channel.send(`**${one} | ${two} | ${three}**\n\n\`${aa}\`\n${message.author}`);
  }
});


client.on("message", message => {
    const prefix = "$"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "$image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`هذا هو شعار سيرفر ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor("PURPLE")
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });


hero.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let args = message.content.split(' ');
  let tag;
  if(args[0] === `${$}discrim`) {
    if(args[1]) {
      let discrim = Array.from(args[1]);
      if(isNaN(args[1])) return message.channel.send(`- \`${message.author.username}\`, يجب ان تتكون هذه الخانة من ارقام وليس احرف`);
      if(discrim.length !== 4) return message.channel.send(`- \`${message.author.username}\`, يجب ان يكون التاق مكون من 4 ارقام`);

      tag = discrim.map(r => r.toString()).join('');
      console.log(tag);
      if(hero.users.filter(f => f.discriminator === tag).size === 0) return message.channel.send(`- \`${message.author.username}\`, لا يوجد احد بهذا التاق`);
      let iLD = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(hero.users.filter(f => f.discriminator === tag).map(r => r.username).slice(0, 10).join('\n'))
      .setFooter('By: , xYouseeeF. " RG');
      message.channel.send(iLD);
    } else if(!args[1]) {
      tag = message.author.discriminator;
      if(hero.users.filter(f => f.discriminator === tag).size === 0) return message.channel.send(`- \`${message.author.username}\`, لا يوجد احد بهذا التاق`);
      let L4U = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(hero.users.filter(f => f.discriminator === tag).map(r => r.username).slice(0, 10).join('\n'))
      .setFooter('By: , xYouseeeF. " RG');
      message.channel.send(L4U);
    }
  }
});


client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith($ + "gRole")) {
    if(!args) return message.reply('اكتب اسم الرتبة');
    if(!role) return message.reply('هذه الرتبة غير موجودة');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- اسم الرتبة',role.name,true)
    .addField('- اي دي الرتبة',role.id,true)
    .addField('- تم انشاء الرتبة',role.createdAt.toLocaleString(),true)
    .addField('- لون الرتبة',role.hexColor,true)
    .addField('- عدد الاعضاء الذي لديهم نفس الرتبة',role.members.size,true)
    .addField('- مركز الرتبة بين كل الرتب',role.position - message.guild.roles.size,true)
    .addField('- خصائص الرتبة',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
});


client.on('message', msg => {
  if (msg.content === 'discord.gg') {
   msg.delete(30)
    msg.reply('ممنوع النشر !!');
  }
});


client.login(process.env.BOT_TOKEN);
