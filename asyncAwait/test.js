const p = new Promise((res, rej)=>{
    res(1);
});

async function fun(){
    return 1;
}

function fun2(){
    return Promise.resolve(1);
}

const p1 = fun();
const p2 = fun();

console.log(p1);
console.log(p2);

console.log(fun2() === fun2());

console.log(p1 === p2);


