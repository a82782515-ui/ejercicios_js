const form=document.getElementById("form"),r=document.getElementById("resultado");
form.addEventListener("submit",e=>{e.preventDefault();const n=Number(num.value);let s=`<span class="titulo">Tabla del ${n}</span>`;
for(let i=1;i<=12;i++)s+=`<div class="fila"><span>${n} × ${i}</span><b>${n*i}</b></div>`;
r.innerHTML=s;r.classList.add("show")});