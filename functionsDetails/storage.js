// var f = function func(){
//     console.log(func);
//     console.log(f);
// }
// // console.log(func);           throws "func NOT DEFINED" Error bcz in this scope it doesn't
// console.log(f);

// f();

function fun(a, b){
    console.log(arguments);
}

fun(10, 20);