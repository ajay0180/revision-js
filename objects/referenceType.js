

function modify(obj){
    obj.name = "harsh";
    console.log("inside func " + obj.name );
}
const obj = {
    name : "gourav",
    age  : 19,
    getInfo : function(){
        return `${this.name} ${this.age}`
    }
}

modify(obj)

console.log("outside func "  + obj.name);


