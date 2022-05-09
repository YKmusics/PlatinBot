module.exports = {
  name:"work",
  description:"Work and get money.",
  usage:"work",
  permlevel:"None",
  code:`$setUserVar[wallet;$sum[$getUserVar[wallet];$random[250;500]]]
$title[1;$userTag's Work Session]
$description[1;You $randomText[watched ads;recorded videos;uploaded a video to YouTube;washed dishes;worked at a museum;sold groceries;helped old ladies cross the road;developed a bot;caught some fish;entered a tournament;found some money on the sidewalk;transformed air into money :wind_blowing_face:;rescued injured people;joined a tv program;did a livestream;sold your useless things;played lottery;did some gambling] and got $customemoji[coin] $random[250;500]!]
$color[1;BLUE]
$addtimestamp[1]
$cooldown[1m;:x: You can work again in \`%time%\`]`
}