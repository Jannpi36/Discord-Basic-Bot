const {
Client,
GatewayIntentBits,
Partials,
Collection,
} = require ("discord.js");
const { Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
 intents: [Guilds, GuildMembers, GuildMessages],
 partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./Handlers/eventHandler");

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();

loadEvents(client);

client.login(client.config.token);
/*let member = await message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(r => r.user.username == args[1]) || message.guild.members.cache.find(r => r.displayName == args[1]) || message.guild.members.cache.find(r => r.id == args[1]) || message.member;*/

     //// evento message

     client.on('guildMemberAdd', member => {
        const channel = member.guild.channels.cache.find(ch => ch.name === 'bienvenidas');
        if (!channel) return;
        const embed = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle('¡Bienvenido/a a Odissey Hosting, ${member.user.tag} !')
          .setDescription('Esperamos que disfrutes tu tiempo aquí.')
          .setThumbnail(member.user.displayAvatarURL())
          .setTimestamp()
          .setFooter('¡Que te diviertas!', 'https://i.imgur.com/wSTFkRM.png');
        channel.send(embed);
      });