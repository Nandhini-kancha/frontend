console.log("nandhu")
console.log("raju")

setTimeout(()=>{
    console.log("Im a inside settimeout")
},0);//it will appear at end-1
setTimeout(()=>{
    console.log("Im a inside settimeout2")
},0);//it will appear at end 
console.log("the end")

const callback=(arg)=>{
    console.log(arg)
}
const loadscript=(scr,callback)=>{
    let sc=document.createElement("script")
    sc.src=src;
    sc.onload=callback("nandhu");
    document.head.append(sc)
}


