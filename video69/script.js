let a=4

function fact(number){
    let arr=Array.from(Array(number+1).keys())
    let c=arr.slice(1,).reduce((a,b)=>a*b)
    return c
}
console.log(fact(a))