const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("No no no.");
  if(!args[0] || args[0 == "help"]) return message.reply("Użyj: !prefix <np +>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("0xF1C40F")
  .setTitle("Prefix ustawiony!")
  .setDescription(`Ustawiony na: ${args[0]}`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}