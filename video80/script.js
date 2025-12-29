// let obj={
//     a:1,
//     B:"Nandhu"
// }

// console.log(obj)

// let animal={
//     eats:true
// };

// let rabbit={
//     jumps:true
// };

// rabbit.__proto__=animal;//sets prototype


class Animal{
    constructor(name){
        this.name=name
        console.log("object is created...")
    }

    eats(){
        console.log("eating")
    }
    jumps(){
        console.log("jumping...")
    }
}


class Lion extends Animal{

    constructor(name){
        super()
        this.name=name
        console.log("name")
    }

    eats(){
        super.eats()
        console.log("Lion eating ")
    }
     
}
let a=new Animal("nandhu");
console.log(a)
let l=new Lion("Lion")
console.log(l)

// l.eats() method overriding