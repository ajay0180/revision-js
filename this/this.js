// ## INSIDE FUNCTION
// function outer(){
//     console.log(this);
   
// }
// outer();

// ## INSIDE PROPER METHOD
// const person = {
//     name: 'John',
//     greet: function() {
//       console.log(this);
//     }
//   };
//   person.greet();

// ## INSIDE CONSTRUCTER FUNCTION
// function Person(name){
//     this.name = name;
// }
// const p1 = new Person("gourav");
// console.log(p1.name);

// ## INSIDE CLASSES
class Person {
    constructor(name) {
      this.name = name;
      this.age = 13;
    }
  
    greet() {
      console.log(this);
    }
  }
  
  const person1 = new Person('John');
  person1.greet();

// ## INSIDE ARROW FUNCTION
// const func = ()=>{
//     console.log(this);
// }
// func();