function x(){
    console.log("x executed");
}

function y(fn){
    console.log("y executed")
    fn();
}

y(x);