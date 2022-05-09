module.exports = {
  name:"help",
  description:"Return help menu or get help on a command.",
  usage:"help [COMMANDNAME]",
  aliases:["helpme","commands","commandlist"],
  permlevel:"None",
  $if:"v4",
  code:`$if[$message[1]==]
$title[1;Help]
$description[1;Total commands : \`$commandsCount\` commands\nType \`$getServerVar[prefix]help [COMMANDNAME]\` to get info on a command]
$addField[1;Info;\`help, ping, info\`]
$addField[1;Config;\`prefix, announce, addmoney, update\`]
$addField[1;Games;\`tictactoe, snake, meme\`]
$addField[1;Economy;\`balance, work, deposit, withdraw, rich, rob, roleshop, buy-role, daily\`]
$addField[1;Moderation;\`ban, kick, mute, unmute\`]
$color[1;BLUE]
$addTimestamp[1]
$title[2;Announcements]
$addField[2;Past Announcement;$getvar[pastannouncement]]
$addfield[2;Latest Announcement;$getVar[announcement]]
$color[2;BLUE]
$else
$title[1;Info about $commandInfo[$message[1];name]]
$description[1;$commandinfo[$message[1];description]]
$addField[1;Permission Level;$commandInfo[$message[1];permlevel]]
$addField[1;Usage;$commandInfo[$message[1];usage]]
$addField[1;Aliases;$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];aliases]==];true;This command has no aliases.];false;$commandInfo[$message[1];aliases]]]
$color[1;BLUE]
$addTimestamp[1]
$onlyIf[$commandInfo[$message[1];name]!=;:x: Command not found.]
$endif
`
}