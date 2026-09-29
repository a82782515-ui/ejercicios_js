const form=document.getElementById("form"),r=document.getElementById("resultado");
form.addEventListener("submit",e=>{e.preventDefault();const x=Number(num.value),a=Math.PI*x*x;
r.innerHTML=`<span class="titulo">Resultado</span><div class="fila"><span>Radio</span><b>${x}</b></div><span class="valor">Área = ${a.toFixed(2)} unidades²</span>`;r.classList.add("show")});