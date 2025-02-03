import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>TTT</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <p></p>

    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
