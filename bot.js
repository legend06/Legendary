const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log(
    `Hoş geldin ${client.user.tag}!sunucuya giriş yaptı artık aktif!`
  );
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply("as");
  }
  if (msg.content.toLowerCase() === "instagram") {
    msg.reply("legendkral06");
  }
  if (msg.content.toLowerCase() === "youtube") {
    msg.reply("https://www.youtube.com/channel/UCIglBWL-TrFgXKqmj74PP_Q");
  }
});
client.login("NzE2NTU1NDM5OTc3NzkxNTA5.XtOZDA.AqZPVtYGKvYox62UIY8OD1yHvp0");
