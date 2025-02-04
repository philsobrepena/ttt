import { clickAction } from "./scoring"

let players = ["0","X"]
var currentPlayer = players[0]
var counter = 0

export function setupCounter(element: HTMLButtonElement) {


  const setPlayer = (player: string) => {
    currentPlayer = player
    if (counter % 2 == 0){
      currentPlayer = players[0]
    } else {
      currentPlayer = players[1]
    }
  }

  const setCounter = (count: number) => {
    counter = count
    if (count == 0){
    element.innerHTML = "-"
    } else if (element.innerHTML != "-"){
    console.log(`invalid move! its still your turn: ${currentPlayer}`)
    counter -= 1
    } else {
    element.innerHTML = `${currentPlayer}`
    console.log(`current player: ${currentPlayer}, current move: ${count}`)
    }
  }

  // const setGameStatus = () => {
  //   element.innerHTML = `current player: ${currentPlayer} \n current move: ${counter}`

  // }

  // setGameStatus()

  element.addEventListener('click', () => setCounter(counter + 1))
  element.addEventListener('click', () => setPlayer(currentPlayer))

  setCounter(0)
  setPlayer(players[0])
  clickAction(element)
}
