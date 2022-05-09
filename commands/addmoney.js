module.exports = {
  name:"addmoney",
  description:"Adds money to user balance.",
  aliases:["add-money"],
  usage:"addmoney [@USER] [AMOUNT]",
  permlevel:"Developers Only",
  code:`Successfully added $customEmoji[coin] $message[2] to user wallet.
  $setuservar[wallet;$sum[$getuservar[wallet;$mentioned[1]];$message[2]];$mentioned[1]]
  $onlyIf[$isNumber[$message[2]]==true;:x: Please enter a valid number.]
  $onlyforids[730860997740331140;809827760625156146;:x: This command is for developers only.]`
}