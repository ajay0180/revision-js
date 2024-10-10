const obj = {
    name : "gourav",
    age  : 19,
    getInfo : function(){
        return `${this.name} ${this.age}`
    }
}

const list = Object.entries(obj);

console.log(list);
