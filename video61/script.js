//faulty calculator

    var prob=Math.random();
    var a=prompt("enter a value");
    var b=prompt("enter b value");
    var input=prompt("enter the operator");
    let obj={
        "+":"-",
        "*":"+",
        "-":"/",

    }
    if(prob>0.1){
        alert(`the result is ${eval(`${a} ${input} ${b}`)}`)
    }
    else{
        input=obj[input]
        alert(`the result is ${eval(`${a} ${input} ${b}`)}`)
    }
