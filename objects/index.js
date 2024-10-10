
const obj = {
    name : "gourav",
    age  : 19,
    getInfo : function(){
        return `${this.name} ${this.age}`
    }
}
let school = {
    20: 1000,
    name: 'Vivekananda School',
    location: 'Delhi',
    established: '1971',
    displayInfo: function () {
        console.log(`The value of the key 20 is ${school['20']}`);
    }
}
console.log(typeof Object.keys(school)[0], Object.keys(school)[0] )

const obj2 = {
    address: "gali 2"
}

obj.__proto__ = obj.prototype

// console.log(obj.address);