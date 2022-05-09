module.exports = {
  name:"meme",
  description:"Random memes.",
  aliases:["memes"],
  usage:"meme",
  permlevel:"None",
  code:`$djsEval[(async () => {
  const { Meme } = require('leaf-utils');

await Meme({
            message: message,
            slash_command: false,
            footer: false,
            time: 300000,
            label: {
                firstlabel: 'Next',
                secondlabel: 'Stop',
            },
            emojis: {
                firstbutton: '↪️',
                secondbutton: '🛑',
            },
            colors: {
                firstbutton: 'PRIMARY',
                secondbutton: 'DANGER',
            },
            embedColor: 'BLUE',
            authorOnly: 'Only <@{{author}}> can use these buttons!',
        })
  })()]`
}