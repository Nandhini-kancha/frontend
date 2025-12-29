let a=prompt("enter first number")
let b=prompt("enter another number")
// let sum=a+b this will append the numbers
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("sorry")
}
let sum=parseInt(a)+parseInt(b)


try{
console.log("the sum is ",sum*x)
return true
}catch(error){
console.log("erroe aye girl")
return false
}
finally{
    console.log("files are being closed")//finally will be executed even after return statement
}
