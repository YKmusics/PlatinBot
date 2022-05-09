


module.exports = {
  name:"tictactoe",
  description:"Lets you play Tic Tac Toe with someone.",
  aliases:["ttt"],
  usage:"tictactoe <@USER>",
  permlevel:"None",
  code:`$djsEval[(async () => {
  const { TicTacToe } = require('leaf-utils');
  await TicTacToe({
            message: message,
            slash_command: false,
            time: 30000,
            opponent: message.mentions.users.first(),
            embed: {
                title: 'Tic Tac Toe',
                color: 'BLUE'
            },
            challenge: {
                acceptButton: 'Accept',
                denyButton: 'Deny',
            },
            emojis: {
                xEmoji: '❌',
                oEmoji: '🔵',
            },
            colors: {
                xEmoji: 'DANGER',
                oEmoji: 'PRIMARY',
            },
            noUser: ':x: You must mention someone.',
            acceptMessage: '{{opponent}}, {{player}} has invited you to a game of Tic Tac Toe!',
            cancelMessage: '{{opponent}} refused to have a game with you!',
            endMessage: 'Challenge not accepted in time!',
            authorOnly: ':x: You cant use these buttons',
        })
    
  })()]`
}
 