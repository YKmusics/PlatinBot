


module.exports = {
  name:"snake",
  description:"Lets you play snake.",
  aliases:["snek"],
  usage:"snake",
  permlevel:"None",
  code:`$djsEval[(async () => {
  const { Snake } = require('leaf-utils');

 new Snake({
            message: message,
            slash_command: false,
            snake: {
                head: '🟢',
                body: '🟩',
                tail: '🟢',
                over: '💀'
            },
            emojis: {
                board: '⬛',
                food: '🍎',
                up: '⬆️',
                right: '➡️',
                down: '⬇️',
                left: '⬅️',
            },
            foods: ['🍎', '🍇', '🍊', '🍕', '🥕', '🥞'],
            stopButton: {
                stopLabel: 'Stop',
                stopStyle: 'DANGER',
            },
            authorOnly: 'Only {{author}} can use these buttons!',
        }).startGame();
    
  })()]`
}
 