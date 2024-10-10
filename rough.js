// function func(){
//     return new Promise((resolve, reject)=>{

//         resolve("output-1");

//         resolve("output-2");

//         console.log("executer finished");

//     })
// }

// func()
// .then((data)=>{
//     console.log(data + " ,this is a MICROTASK");
// })
// console.log("main thread finish");

const pr = new Promise((resolve, reject)=>{
    reject("yes");
})
console.log(pr);