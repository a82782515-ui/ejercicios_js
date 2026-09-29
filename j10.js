const form=document.getElementById("form"),r=document.getElementById("resultado");
form.addEventListener("submit",e=>{e.preventDefault();const n=Number(num.value);let p=n>=2;for(let i=2;i*i<=n&&p;i++)if(n%i===0)p=false;
r.innerHTML=`<span class="titulo">Resultado</span><span class="valor">${n} ${p?"ES":"NO ES"} un número primo.</span>`;r.classList.add("show")});