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
    <button id="printrows" type="button">print rows</button>
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

const clickAction = (element: HTMLButtonElement) => {

  element.addEventListener('click', () => {
    // row 1 values

    const space1 = document.getElementById("row1")?.childNodes[1].textContent
    const space2 = document.getElementById("row1")?.childNodes[3].textContent
    const space3 = document.getElementById("row1")?.childNodes[5].textContent

    // row 2 values

    const space4 = document.getElementById("row2")?.childNodes[1].textContent
    const space5 = document.getElementById("row2")?.childNodes[3].textContent
    const space6 = document.getElementById("row2")?.childNodes[5].textContent

    // row 3 values

    const space7 = document.getElementById("row3")?.childNodes[1].textContent
    const space8 = document.getElementById("row3")?.childNodes[3].textContent
    const space9 = document.getElementById("row3")?.childNodes[5].textContent

    console.log(
    `
    ${space1},${space2},${space3},\n
    ${space4},${space5},${space6},\n
    ${space7},${space8},${space9},
    `
  )})
}
clickAction(document.querySelector<HTMLButtonElement>('#printrows')!)
