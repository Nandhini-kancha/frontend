let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="<b> u are clicked<b>"
})
btn.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="<b> u are double clicked<b>"
})
btn.addEventListener("contextmenu",()=>{
    alert("dont hack us by right click please")
})
document.addEventListener("keydown",(e)=>{
    console.log(e);
})