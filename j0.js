const form=document.getElementById("form");
const r=document.getElementById("resultado");
form.addEventListener("submit",e=>{
 e.preventDefault();
 const n=Number(num.value);
 let primo=n>=2;
 for(let i=2;i*i<=n&&primo;i++) if(n%i===0) primo=false;
 r.textContent=primo?`${n} es un número primo.`:`${n} no es un número primo.`;
 r.classList.add("show");
});