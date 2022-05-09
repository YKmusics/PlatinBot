module.exports = {
  name:"deposit",
  aliases:["dep"],
  usage:"deposit <AMOUNT/ALL>",
  description:"Deposit money to bank.",
  permlevel:"None",
  $if: "v4",
  code:`$if[$isnumber[$message[1]]==true]
$setUserVar[wallet;$sub[$getUserVar[wallet];$replaceText[$message[1];all;$getuservar[wallet]]]]
$setUserVar[bank;$sum[$getUserVar[bank];$replaceText[$message[1];all;$getUserVar[wallet]]]]
$title[1;Money Has Been Deposited]
$description[1;$customEmoji[coin] $replaceText[$message[1];all;$getuservar[wallet]] has been deposited to bank.]
$color[1;BLUE]
$onlyIf[$message[1]<=$getuservar[wallet];:x: You cannot deposit more than you have.]
$else
$setUserVar[wallet;$sub[$getUserVar[wallet];$replaceText[$message[1];all;$getuservar[wallet]]]]
$setUserVar[bank;$sum[$getUserVar[bank];$replaceText[$message[1];all;$getUserVar[wallet]]]]
$title[1;Money Has Been Deposited]
$description[1;$customEmoji[coin] $replaceText[$message[1];all;$getuservar[wallet]] has been deposited to bank.]
$color[1;BLUE]
$onlyif[$message[1]==all;:x: Please type in a number or "all"]
$endif
`
}