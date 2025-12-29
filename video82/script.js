async function sleep(){
    return new Promise((reSolve,reject)=>{
        setTimeout(()=>{
         reSolve(45)
        },1000);
    })
    
}


(async function main(){
let a=await sleep()
console.log(a)
let b=await sleep()
console.log(b)
})

//82 