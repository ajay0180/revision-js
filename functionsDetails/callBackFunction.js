const f = setTimeout(function (){
    console.log("timer completed");
},5000);


function x(func){
    console.log("executing y in x");
    func();
}

x(function y(){
    console.log("y executed")
});