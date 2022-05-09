module.exports = {
  name:"mute",
  description:"Mutes an user.",
  usage:"mute <@USER/USERID> <DURATION (60s/5m/10m/1h/1d/1w)> [REASON]",
  permlevel:"Manage Roles",
  $if:"v4",
  code:`
$if[$isNumber[$message[1]]==true]
$timeOutMember[$guildid;$message[1];$message[2];no;$messageslice[2]]
$title[1;User has been timeouted]
$addField[1;Reason;$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];false;$messageSlice[2]];true;No reason was specified.]]
$addField[1;Duration;$message[2]]
$addField[1;Moderator;<@$authorID> | $authorID | $userTag]
$addField[1;User;<@$message[1]> | $message[1] | $userTag[$message[1]]]
$color[1;BLUE]
$addTimestamp[1]
$onlyIf[$hasAnyPerm[$guildid;$message[1];admin]!=true;:x: I'm unable to timeout this user.]
$onlyIf[$userExists[$message[1]]==true;:x: User not found.]
$onlyIf[$message[1]!=$authorId;:x: You cannot timeout yourself.]
$else
$timeOutMember[$guildid;$mentioned[1];$message[2];no;$messageslice[2]]
$title[1;User has been timeouted]
$addField[1;Reason;$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];false;$messageSlice[2]];true;No reason was specified.]]
$addField[1;Duration;$message[2]]
$addField[1;Moderator;<@$authorID> | $authorID | $userTag]
$addField[1;User;<@$mentioned[1]> | $mentioned[1] | $userTag[$mentioned[1]]]
$color[1;BLUE]
$addTimestamp[1]
$onlyIf[$hasAnyPerm[$guildid;$mentioned[1];admin]!=true;:x: I'm unable to timeout this user.]
$onlyIf[$userExists[$mentioned[1]]==true;:x: User not found.]
$onlyIf[$mentionType[$message[1]]!=user;:x: Invalid mention.]
$onlyIf[$mentioned[1]!=$authorID;:x: You cannot timeout yourself.]
$endif
$onlyIf[$checkContains[$message[2];60s;5m;10m;1h;1d;1w]!=false;{newEmbed:{title:Wrong Usage}{description:Guide:

\`\`\`
Example usage:
mute @Disitific#4777 60s/1m/5m/10m/1h/1d/1w Memes in general

The "duration" of timeout must be one of the durations shown above.\`\`\`
}{color:RED}{timestamp}}]
$onlyPerms[manageroles;:x: You don't have enough permissions to run this command.]
`
}