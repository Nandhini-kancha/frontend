console.log("this is tutorial on loops")
let a=1;
console.log(a);
console.log(a+1);
console.log(a+4);
for(let index=0;index<100;index++){
    console.log(index);
}let obj={
    name:"nandhu",
    role:"programmer",
    company:"codewithharry"
}
for(const key in obj){
    const ele=obj[key];
    console.log(key);//name role company
}
for (const c of "nandhu"){
    console.log(c);
}
// in---for object
//of ---for iterator
let b=1;
while(b<5){
 console.log(b);
 b++;   
}
do{
console.log(b);
b++;
}while(b<9)