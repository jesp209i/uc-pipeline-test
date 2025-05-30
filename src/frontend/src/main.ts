import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '../public/vite.svg'
import { setupCounter } from './counter.ts'
import '@umbraco-ui/uui-box'
import '@umbraco-ui/uui-button'

let headline = document.querySelector<HTMLDivElement>('#app')!.innerText;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <uui-box headline="${headline}">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/app${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="/app${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <div class="card">
      <uui-button look="primary" id="counter" type="button"></uui-button>
    </div>
    hello
  </uui-box>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
