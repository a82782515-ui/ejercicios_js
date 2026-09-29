const form=document.getElementById("form"),r=document.getElementById("resultado");
form.addEventListener("submit",e=>{e.preventDefault();const nums=[Number(n1.value),Number(n2.value),Number(n3.value)],m=Math.max(...nums);
r.innerHTML=`<span class="titulo">Resultado</span><span class="valor">${nums.filter(x=>x===m).length>1?"Hay empate":"El número mayor es"} ${m}</span>`;r.classList.add("show")});