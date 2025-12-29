let arr=[1,13,5,7,11]
// let newArr=[]
// for(let i=0;i<arr.length;i++){
//     const ele=arr[i];
//     newArr.push(ele**2)
// }
// console.log(newArr)



let newArr=arr.map((e)=>{
    return e**2
})
 console.log(newArr)
 const greaterthanseven =(e)=>{
    if(e>7)
    return true
return false
 }
  console.log(newArr.filter(greaterthanseven))
//  console.log(greaterthanseven
let arr2=[1,2,3,4,5]
const red=(a,b)=>{
    return a+b
}
console.log(arr2.reduce(red))