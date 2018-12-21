let ttt = [
  ['x', 'o', 'o'],
  ['x', 'o', 'x'],
  ['o', '-', '-']
]

let newGame = [
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-']
]


function ticTacToeCheck(game) {
  function isArrWinner(a) {
    let first = a[0]
    if (first == '-') return false
    return a.every(e => e == first)
  }
  for (let i = 0; i < game.length; i++) {
    if (isArrWinner(game[i])) {
      return "The winner is " + game[i][0]
    }
  }
  let cols = {}
  // {
  //   0: ['x', 'x', 'x'],
  //   1: ['o', 'o', '-'],
  //   2: ['-', '-', '-']
  // }
  game.forEach(a => {
    a.forEach((e, i) => {
      if (!cols[i]) {
        cols[i] = []
      }
      cols[i].push(e)
    })
  })
  for (let k in cols) {
    if (isArrWinner(cols[k])) {
      return "The winner is " + cols[k][0]
    }
  }
  let diagnols = [[game[0][2], game[1][1], game[2][0]], [game[0][0], game[1][1], game[2][2]]]
  for (let i = 0; i < diagnols.length; i++) {
    if (isArrWinner(diagnols[i])) {
      return "The winner is " + diagnols[i][0]
    }
  }
}

console.log(ticTacToeCheck(ttt))



//computers choice
  //1. if can win then play there
  //2. or if need to block
  //3. easiest - randomly generate index