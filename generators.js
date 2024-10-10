function* count(){
    for (var x = 0; true; x++){
        yield x
    }
}

for(var x of count()){
    console.log(x);
}

// function count(){
//     var arr = [];
//     for(var x = 0; true; x++){
//         arr.push(x);
//     }
//     return arr;
// }
// for(var x of count()){
//     console.log(x);
// }


