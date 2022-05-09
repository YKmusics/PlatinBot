module.exports = {
  name:"daily",
  description:"Collect your daily PlatinCoins.",
  usage:"daily",
  aliases:["collect"],
  permlevel:"None",
  code:`$setuservar[wallet;$sum[$getuservar[wallet];$random[750;1500]]]
  $title[1;Gimme!]
  $description[1;You earned $customEmoji[coin] $random[750;1500]!]
  $color[1;BLUE]
  $addTimestamp[1]
  $cooldown[24h;:x: Slow down, you just collected your daily coins in last 24 hours. Please wait \`%time%\`.]`
  
}