const form=document.getElementById("form"),r=document.getElementById("resultado");
form.addEventListener("submit",e=>{e.preventDefault();const x=letra.value.trim().toLowerCase();let t="";
if(!/^[a-záéíóúüñ]$/i.test(x))t="Ingrese una sola letra.";else t="aeiouáéíóúü".includes(x)?`"${x}" es una VOCAL.`:`"${x}" es una CONSONANTE.`;
r.innerHTML=`<span class="titulo">Resultado</span><span class="valor">${t}</span>`;r.classList.add("show")});