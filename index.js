 const aoijs = require('aoi.js');
 const bot = new aoijs.Bot({
   token: "OTUyOTgyNzIzOTYwNjM5NTE4.Yi98Ug.KQNugPwQZpFIRvmUlP2xkdzE_H4",
   prefix: "$getServerVar[prefix]",
   intents: "all"
 });

bot.onMessage() //enables bot to see messages (required for executing Commands)

const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

bot.variables({
  prefix: "=",
  wallet: "250",
  bank  : "0",
  pastannouncement: "`(no announcements have been made yet)`",
  announcement    : "`(no announcements have been made yet)`",
})

bot.status({
  text:"Platin Aviation Discord Server",
  type:"WATCHING",
  time:12
})
bot.status({
  text:"=help",
  type:"LISTENING",
  time:12
})
bot.status({
  text:"Developed by Disitific#4777",
  type:"PLAYING",
  time:12
})