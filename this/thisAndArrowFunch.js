// const obj = {
//     name: 'Alice',

//     regularFunction: function() {
//         console.log(this.name);  // `this` refers to `obj`
//     },
//     arrowFunction: () => {
//         console.log(this);      // `this` is inherited from the outer global execution context, which is {} for nodejs module scope
//     }
// };

// obj.regularFunction();          // Alice

// obj.arrowFunction();            // {}

function outer() {
    const outerVariable = 'I am outside!';
    
    const arrowFunc = () => {
        console.log(this);         // `this` refers to the `this` from Functional execution context of `outer` function, which is "global" object
    };

    arrowFunc();
}

outer();
