module.exports = {
  name:"unmute",
  description:"Unmutes an user.",
  usage:"ummute <@USER/USERID> [REASON]",
  permlevel:"Manage Roles",
  $if:"v4",
  code:`
$if[$isNumber[$message[1]]==true]
$timeOutMember[$guildid;$message[1];0s;no;$messageslice[1]]
$title[1;User has been un-timeouted]
$addField[1;Reason;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];false;$messageSlice[1]];true;No reason was specified.]]
$addField[1;Moderator;<@$authorID> | $authorID | $userTag]
$addField[1;User;<@$message[1]> | $message[1] | $userTag[$message[1]]]
$color[1;BLUE]
$addTimestamp[1]
$onlyIf[$hasAnyPerm[$guildid;$message[1];admin]!=true;:x: I'm unable to un-timeout this user.]
$onlyIf[$userExists[$message[1]]==true;:x: User not found.]
$onlyIf[$message[1]!=$authorId;:x: You cannot un-timeout yourself.]
$else
$timeOutMember[$guildid;$mentioned[1];$message[2];no;$messageslice[1]]
$title[1;User has been un-timeouted]
$addField[1;Reason;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];false;$messageSlice[1]];true;No reason was specified.]]
$addField[1;Moderator;<@$authorID> | $authorID | $userTag]
$addField[1;User;<@$mentioned[1]> | $mentioned[1] | $userTag[$mentioned[1]]]
$color[1;BLUE]
$addTimestamp[1]
$onlyIf[$hasAnyPerm[$guildid;$mentioned[1];admin]!=true;:x: I'm unable to un-timeout this user.]
$onlyIf[$userExists[$mentioned[1]]==true;:x: User not found.]
$onlyIf[$mentionType[$message[1]]!=user;:x: Invalid mention.]
$onlyIf[$mentioned[1]!=$authorID;:x: You cannot un-timeout yourself.]
$endif
$onlyPerms[manageroles;:x: You don't have enough permissions to run this command.]
`
}