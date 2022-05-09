module.exports = {
  name:"announce",
  description:"Makes an announcement.",
  permlevel:"Only Owners",
  usage:"announce <ANNOUNCEMENT>",
  code:`$channelSendMessage[963096747360538724;{newEmbed:{title:📢 Announcement}{description:$message}{color:BLUE}{timestamp}}]
  $setvar[announcement;$message\n\n\`$month $day, $year | announced by $usertag\`]
$setvar[pastannouncement;$getvar[announcement]]
$title[1;Success]
$description[1;Announcement was sent.]
$color[1;BLUE]
$addtimestamp[1]
$onlyif[$message!=;:x: Please enter the announcement you want to make.]
$onlyForIds[$botownerid;809827760625156146;:x: This command is for owners only.]`
}