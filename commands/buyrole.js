module.exports = {
  name:"buy-role",
  usage:"buy-role <ROLENAME>",
  permlevel:"None",
  description:"Buy roles using your PlatinCoins.",
  $if: "v4",
  code:`$if[$tolowercase[$message]==unbelievably rich]
  $title[1;Success]
  $description[1;Thanks for buying \`Unbelievably Rich\` role!]
  $color[1;BLUE]
  $giverole[$guildid;$authorID;$findrole[PlatinBot - Unbelievably Rich]]
  $setuservar[wallet;$sub[$getuservar[wallet];25000]]
  $onlyif[$getuservar[wallet]>=25000;:x: You do not have enough money for this role!]
  $else
  $if[$tolowercase[$message]==crazy rich]
  $title[1;Success]
  $description[1;Thanks for buying \`Crazy Rich\` role!]
  $color[1;BLUE]
  $giverole[$guildid;$authorID;$findrole[PlatinBot - Crazy Rich]]
  $setuservar[wallet;$sub[$getuservar[wallet];15000]]
  $onlyif[$getuservar[wallet]>=15000;:x: You do not have enough money for this role!]
  $else
  $if[$tolowercase[$message]==rich]
  $title[1;Success]
  $description[1;Thanks for buying \`Rich\` role!]
  $color[1;BLUE]
  $giverole[$guildid;$authorID;$findrole[PlatinBot - Rich]]
  $setuservar[wallet;$sub[$getuservar[wallet];10000]]
  $onlyif[$getuservar[wallet]>=10000;:x: You do not have enough money for this role!]
  $else
  $if[$tolowercase[$message]==wealthy]
  $title[1;Success]
  $description[1;Thanks for buying \`Wealthy\` role!]
  $color[1;BLUE]
  $giverole[$guildid;$authorID;$findrole[PlatinBot - Wealthy]]
  $setuservar[wallet;$sub[$getuservar[wallet];5000]]
  $onlyif[$getuservar[wallet]>=5000;:x: You do not have enough money for this role!]
  $else
  :x: Role not found!
  $endif
  $endif
  $endif
  $endif
  `
}