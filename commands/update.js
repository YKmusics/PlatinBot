module.exports = {
  name:"update",
  description:"Sends an update to updates channel.",
  aliases:["updates"],
  usage:"update [UPDATE]",
  permlevel:"Only Disitific#4777",
  code:`$channelSendMessage[963096747360538724;{newEmbed:{title:New Update!}{description:\`\`\`
$replaceText[$replaceText[$replaceText[$message;added;#RIGHT#+#LEFT#];removed;#RIGHT#-#LEFT#];fixed;#RIGHT#•#LEFT#]\`\`\`}{color:BLUE}{timestamp}]
  Update Announcement sent.
  $onlyForIDs[730860997740331140;:x: You can't use this command.]
  `
}