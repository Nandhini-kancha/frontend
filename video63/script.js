let arr=[1,2,3,4];

console.log(arr);
console.log(arr.length);
//strings are immutable arrays are mutable
console.log(arr[0]);  //output 1
arr[0]=999;
console.log(arr);
console.log(arr.toString())
console.log(arr.join("and"))
arr.pop()
arr.push(100)
console.log(arr);
arr.push("nandhu")
arr.shift()//removes the first element
arr.unshift("jack")
console.log(arr); //pop ka bhai shift and push ka bhai unshift
delete arr[2]
console.log(arr);
console.log(arr[2]);  //undefined
console.log(arr.length);//5
arr.splice(1,2)
console.log(arr);
arr.splice(1,3,44,55)
console.log(arr);
num=[2,3,4,5,6]
console.log(num.slice(2))//[4,5,6]
console.log(num.slice(1,3))//[3,4]--number at index 3 will not be included
num.reverse();
console.log(num);
arr.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})
let obj={
    a:1,
    b:2,
    c:3
}
for(const key in object){
    if(Object.hasOwnProperty.call(object,key)){
        const element=object[key];
        console.log(key,element)
    }
}
//forof loop
for (const it of arr) {
    console.log(it)
}
