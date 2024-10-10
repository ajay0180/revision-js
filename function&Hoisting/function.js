var x = 1;

a();
b();

console.log(x);

function a(){
    x = 2;
    console.log(x);
}
function b(){
    
    console.log(x);
}

