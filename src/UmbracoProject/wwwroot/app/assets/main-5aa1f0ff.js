const n="/assets/typescript-f6ead1af.svg",a="/assets/vite-4a748afd.svg";function c(e){let t=0;const o=s=>{t=s,e.innerHTML=`count is ${t}`};e.addEventListener("click",()=>o(t+1)),o(0)}let r=document.querySelector("#app").innerText;document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/app${a}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${n}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>${r}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;c(document.querySelector("#counter"));
