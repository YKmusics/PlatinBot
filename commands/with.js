module.exports = {
  name:"withdraw",
  aliases:["with"],
  usage:"withdraw <AMOUNT/ALL>",
  description:"Withdraw money from bank.",
  permlevel:"None",
  $if: "v4",
  code:`$if[$isnumber[$message[1]]==true]
$setUserVar[bank;$sub[$getUserVar[bank];$replaceText[$message[1];all;$getuservar[bank]]]]
$setUserVar[wallet;$sum[$getUserVar[wallet];$replaceText[$message[1];all;$getUserVar[bank]]]]
$title[1;Money Has Been Withdrawn]
$description[1;Withdrawn $customEmoji[coin] $replaceText[$message[1];all;$getuservar[bank]] from bank.]
$color[1;BLUE]
$onlyIf[$message[1]<=$getuservar[bank];:x: You cannot withdraw more than you have.]
$else
$setUserVar[bank;$sub[$getUserVar[bank];$replaceText[$message[1];all;$getuservar[bank]]]]
$setUserVar[wallet;$sum[$getUserVar[wallet];$replaceText[$message[1];all;$getUserVar[bank]]]]
$title[1;Money Has Been Withdrawn]
$description[1;Withdrawn $customEmoji[coin] $replaceText[$message[1];all;$getuservar[bank]] from bank.]
$color[1;BLUE]
$onlyif[$message[1]==all;:x: Please type in a number or "all"]
$endif
`
}