module.exports = {
  name:"kick",
  description:"Kicks an user out of the server.",
  usage:"kick <@USER/USERID> [REASON]",
  permlevel:"Kick",
  $if:"v4",
  code:`
$if[$isNumber[$message[1]]==true]
$kick[$message[1];$guildid;$messageslice[1]]
$title[1;User has been kicked from server]
$addField[1;Reason;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];false;$messageSlice[1]];true;No reason was specified.]]
$addField[1;Moderator;<@$authorID> | $authorID | $userTag]
$addField[1;User;<@$message[1]> | $message[1] | $userTag[$message[1]]]
$color[1;BLUE]
$addTimestamp[1]
$onlyIf[$hasAnyPerm[$guildid;$message[1];admin]!=true;:x: I'm unable to kick this user.]
$onlyIf[$userExists[$message[1]]==true;:x: User not found.]
$onlyIf[$message[1]!=$authorId;:x: You cannot kick yourself.]
$else
$kick[$mentioned[1];$guildid;$messageSlice[1]]
$title[1;User has been kicked from server]
$addField[1;Reason;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];false;$messageSlice[1]];true;No reason was specified.]]
$addField[1;Moderator;<@$authorID> | $authorID | $userTag]
$addField[1;User;<@$mentioned[1]> | $mentioned[1] | $userTag[$mentioned[1]]]
$color[1;BLUE]
$addTimestamp[1]
$onlyIf[$hasAnyPerm[$guildid;$mentioned[1];admin]!=true;:x: I'm unable to kick this user.]
$onlyIf[$userExists[$mentioned[1]]==true;:x: User not found.]
$onlyIf[$mentionType[$message[1]]!=user;:x: Invalid mention.]
$onlyIf[$mentioned[1]!=$authorID;:x: You cannot kick yourself.]
$endif
$onlyPerms[kick;:x: You don't have enough permissions to run this command.]
`
}