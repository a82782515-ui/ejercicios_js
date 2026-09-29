const form=document.getElementById("form"),r=document.getElementById("resultado");
form.addEventListener("submit",e=>{e.preventDefault();const d=["","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],x=Number(dia.value);
r.innerHTML=`<span class="titulo">Resultado</span><span class="valor">${x>=1&&x<=7?d[x]:"Ingrese un número del 1 al 7"}</span>`;r.classList.add("show")});