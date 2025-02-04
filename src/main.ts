import './style.css'
import { setupCounter } from './counter.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>ttt</h1>
    <div class="card">
      <div id="row1">
        <button id="space1" type="button"></button>
        <button id="space2" type="button"></button>
        <button id="space3" type="button"></button>
      </div>
      <div id="row2">
        <button id="space4" type="button"></button>
        <button id="space5" type="button"></button>
        <button id="space6" type="button"></button>
      </div>
      <div id="row3">
        <button id="space7" type="button"></button>
        <button id="space8" type="button"></button>
        <button id="space9" type="button"></button>
      </div>
      <div id="scores">
        <p id="scoreboard"></p>
      </div>
    </div>
  </div>
`

let scoreboard = document.querySelector<HTMLParagraphElement>('#scoreboard')!

setupCounter(document.querySelector<HTMLButtonElement>('#space1')!, scoreboard)
setupCounter(document.querySelector<HTMLButtonElement>('#space2')!, scoreboard)
setupCounter(document.querySelector<HTMLButtonElement>('#space3')!, scoreboard)
setupCounter(document.querySelector<HTMLButtonElement>('#space4')!, scoreboard)
setupCounter(document.querySelector<HTMLButtonElement>('#space5')!, scoreboard)
setupCounter(document.querySelector<HTMLButtonElement>('#space6')!, scoreboard)
setupCounter(document.querySelector<HTMLButtonElement>('#space7')!, scoreboard)
setupCounter(document.querySelector<HTMLButtonElement>('#space8')!, scoreboard)
setupCounter(document.querySelector<HTMLButtonElement>('#space9')!, scoreboard)
