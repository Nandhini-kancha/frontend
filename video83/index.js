//intervieew questions 
let students=["raju" ,"ravi","annapurna","vishudhanandh","rama","krishnanandh"]
let houses=[]
for(stu of students){
    if(stu.length<6){
        houses.push("house1")
    }
   else if(stu.length<8){
        houses.push("house2")
    }
   else if(stu.length<12){
        houses.push("house3")
    }
   else {
        houses.push("house4")
    }
}
console.log(houses)