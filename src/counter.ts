export function setupCounter(element: HTMLButtonElement) {

  // let players = ["0","X"]
  let counter = 0
  let players = ["0","X"]
  let currentPlayer = players[0]

  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }

  const setPlayer = (player: string) => {
    if (counter % 2 == 0){
      currentPlayer = players[0]
    } else {
      currentPlayer = players[1]
    }
    console.log(`player is ${player}`)
  }

  element.addEventListener('click', () => setCounter(counter + 1))
  element.addEventListener('click', () => setPlayer(currentPlayer))
  setCounter(0)
  setPlayer(players[0])
}
