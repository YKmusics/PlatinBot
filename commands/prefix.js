module.exports = {
  name:"prefix",
  description:"Changes the default prefix of the server.",
  usage:"prefix <NEWPREFIX>",
  aliases:["setprefix","changeprefix"],
  permlevel:"Administrator",
  code:`$setServerVar[prefix;$message[1]]
$title[1;Success]
$description[1;Changed default prefix of this server to "\`$message[1]\`".]
$color[1;BLUE]
$addTimestamp[1]
$onlyIf[$charCount[$message[1]]<=3;{newEmbed:{title:Error},{description::x: Prefix cannot be longer than three characters!},{color:BLUE},{timestamp}}]
$onlyPerms[admin;{newEmbed:{title:Error},{description::x: You do not have the required permission for this command!},{color:BLUE},{timestamp}}]`
}