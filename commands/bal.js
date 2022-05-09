module.exports = {
  name:"balance",
  description:"Returns balance of an user.",
  aliases:["bal"],
  permlevel:"None",
  usage:"balance [@USER]",
  code:`$title[1;Balance of $userTag[$mentioned[1;yes]]]
$addField[1;Bank;$customemoji[coin] $getUserVar[bank;$mentioned[1;yes]]]
$addField[1;Wallet;$customemoji[coin] $getUserVar[wallet;$mentioned[1;yes]]]
$color[1;BLUE]
$addtimestamp[1]`
}