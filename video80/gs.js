class user{
    constructor(name){
        this.name=name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length<4){
            console.log("name is too short")
            return 
        }
        this._name=value;
    }

}
let usr=new user("john");
console.log(usr.name);//sets the name

usr.name="nandhu gaa"
console.log(usr)