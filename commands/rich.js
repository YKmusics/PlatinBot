module.exports = {
  name:"rich",
  description:"Shows the leaderboard.",
  usage:"rich",
  aliases:["leaderboard"],
  permlevel:"None",
  code:`
$title[1;Leaderboard - Wallet]
$description[1;$replaceText[$replacetext[$replacetext[$userLeaderboard[$guildid;wallet;asc;- {top} - {username} - $customemoji[coin] {value}];- 1 -;- :first_place: -];- 2 -;- :second_place: -];- 3 -;- :third_place: -]]
$color[1;BLUE]
$title[2;Leaderboard - Bank]
$description[2;$replaceText[$replacetext[$replacetext[$userLeaderboard[$guildid;bank;asc;- {top} - {username} - $customemoji[coin] {value}];- 1 -;- :first_place: -];- 2 -;- :second_place: -];- 3 -;- :third_place: -]]
$color[2;BLUE]`
}