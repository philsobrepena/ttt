import { clickAction, oWin, xWin } from "./scoring"

let players = ["0","X"]
var currentPlayer = players[0]
var counter = 0

export function setupCounter(element: HTMLButtonElement, text: HTMLParagraphElement) {


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

  const scorePost = (text: HTMLParagraphElement, player: string, count: number, x: boolean, o: boolean) => {
    player = currentPlayer
    count = counter
    if (x){
      text.textContent = `${currentPlayer} Wins!`
    }
    else if (o){
      text.textContent = `${currentPlayer} Wins!`
    }
    else
    {
      text.textContent = `current player: ${currentPlayer} current move: ${counter}`
    }

  }

  element.addEventListener('click', () => setCounter(counter + 1))
  element.addEventListener('click', () => setPlayer(currentPlayer))
  element.addEventListener('click', () => scorePost(text, currentPlayer, counter, xWin, oWin))

  setCounter(0)
  setPlayer(players[0])
  clickAction(element)
}
