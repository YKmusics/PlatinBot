module.exports = {
  name:"rob",
  description:"Steal money from wallet of an user",
  usage:"rob <@USER>",
  permlevel:"None",
  aliases:["steal"],
  $if:"v4",
  code:`$if[$randomtext[success;success;fail]==success]
$setuservar[wallet;$sub[$getUservar[wallet;$mentioned[1]];$random[0;$getuservar[wallet;$mentioned[1]]]];$mentioned[1]]
$setuservar[wallet;$sum[$getUservar[wallet];$random[0;$getuservar[wallet;$mentioned[1]]]]]
$title[1;$userTag's Robbery Session]
$description[1;You tried to rob $userTag[$mentioned[1]] and got $customemoji[coin] $random[0;$getUserVar[wallet;$mentioned[1]]]!]
$color[1;BLUE]
$addtimestamp[1]
$else
$setuservar[wallet;$sub[$getUservar[wallet];250]]
$setuservar[wallet;$sum[$getUservar[wallet;$mentioned[1]];250];$mentioned[1]]
$title[1;$userTag's Robbery Session]
$description[1;You tried to rob $userTag[$mentioned[1]] and got **CAUGHT**! you paid the person you tried to stole from $customemoji[coin] 250!]
$color[1;BLUE]
$endif
$cooldown[10m;:x: Slow it down bud. You already robbed someone in past 10 minutes, wait another \`%time%\`.]

$onlyif[$getuservar[wallet]>=250;:x: You need at least $customemoji[coin] **250** in your **wallet** to rob someone.]
$onlyif[$getuservar[wallet;$mentioned[1]]>=250;:x: This user has PlatinCoins lower than $customemoji[coin] **250**, leave them alone!]
$onlyif[$mentioned[1]!=$authorid;:x: How can you rob yourself?]
$onlyif[$mentiontype[$message[1]]!=false;:x: Please mention a valid user.]
`
}