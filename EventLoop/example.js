console.log("start");

setTimeout(()=>{
    console.log("Task-1 executed")
})

Promise.resolve().then(()=>{
    console.log("MicroTask-1 executed")
})
Promise.resolve().then(()=>{
    console.log("MicroTask-2 executed")
})
queueMicrotask(()=>{
    console.log("MicroTask-3 executed");
})

setTimeout(()=>{
    console.log("Task-2 executed");
})

console.log("end");