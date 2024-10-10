// how are functions stored in the memory

// FUNCTION STATEMENT aka DECLARATION
console.log(a);
a();
function a(){
    console.log("a called");
}

// FUNCTION EXPRESSION      
// console.log(b);                                 difference in hoisting
var b = function(){
    console.log("b called");
}
b();

// ANONYMOUS FUNCTION without any name, doesn't have any identity of their own, used when we want to treat the func as a variable
// window.addEventListener("click", function(){

// });

// NAMED FUNCTION EXPRESSION, named function assigned to another variable

const func = function a(){

}

// a();                            gives ERROR
func(); 

// FIRST CLASS FUNCTIONS/CITIZENS: the ability of functions to be used as values, like, passing as argument, returning from functions, being assigned to another variable etc,

// sending functions as argument
function c(func1){
    func1();
}

c(function(){
    console.log("hi");
})

// returning functions from another functions
function d(val){
    return function(num){
        console.log(num*val);
    }
}
d(2)(3);
// assigning properties to the funcion

function sum(a, b){
    console.log(sum.description);
    return a + b;
}

sum.description = "It is used to get sum of two numbers";
console.log(sum(1, 2));


