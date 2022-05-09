module.exports = {
  name:"info",
  description:"Info about bot, and statistics.",
  aliases:["botinfo","bi"],
  usage:"info",
  permlevel:"None",
  code:`$title[1;Info]
  $addField[1;Bot Developer;$userTag[$botOwnerid]]
  $addField[1;Bot Manager;$userTag[809827760625156146]]
  $addField[1;RAM Usage;$roundTenth[$ram;1] MB / 2000 MB]
  $addField[1;CPU Usage;$cpu%]
  $description[1;This bot is designed for Platin Aviation Discord server.]
  $color[1;BLUE]
  $addTimestamp[1]`
  
}