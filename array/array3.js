// let arr = [1,2,3,4,5];

// const doubled = arr.map((elem)=> elem ** 2);

// console.log("new ", doubled);
// console.log("original ", arr);

// const sum = arr.reduce((acc, elem) => {
//     acc = acc + elem;
// }, 0);

const arr2d = [ [1,2,3], [4,5,6], [7,8,9]];

const flattened = arr2d.reduce((acc, arr1d)=> acc.concat(arr1d), []);

console.log(flattened);