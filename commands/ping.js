module.exports = {
  name:"ping",
  description:"Returns bot, Discord API, Database latency and last restart timestamp.",
  aliases:["latency"],
  usage:"ping",
  permlevel:"None",
  code:`$title[1;Latency]
$addField[1;Database Latency;> \`$dbping\` ms.]
$addField[1;Discord Latency;> \`$ping\` ms.]
$addField[1;Bot Latency;> \`$math[$messageping+2000]\` ms.]
$addfield[1;Last Restart;> <t:$truncate[$divide[$readytimestamp;1000]]:R>]

$color[1;BLUE]
$addTimestamp[1]`
}