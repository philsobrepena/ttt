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
    </div>
    <button id="printrows" type="button">🖨️</button>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#space1')!)
setupCounter(document.querySelector<HTMLButtonElement>('#space2')!)
setupCounter(document.querySelector<HTMLButtonElement>('#space3')!)
setupCounter(document.querySelector<HTMLButtonElement>('#space4')!)
setupCounter(document.querySelector<HTMLButtonElement>('#space5')!)
setupCounter(document.querySelector<HTMLButtonElement>('#space6')!)
setupCounter(document.querySelector<HTMLButtonElement>('#space7')!)
setupCounter(document.querySelector<HTMLButtonElement>('#space8')!)
setupCounter(document.querySelector<HTMLButtonElement>('#space9')!)
