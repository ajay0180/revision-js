// task is to calculate the diameter, area and circumference of the circles whose radi are given in an array
// have to take care of DRY principle

// this HOF takes a CB function and the array as argument and returns the resultant array obtained by applying the CB function on each elem 
// of the array
const calculate = function(fn, arr){
    let ans = [];
    
    for(let i = 0; i < arr.length; i++){
        ans.push(fn(arr[i]));
    }

    return ans;
}

const diameter = function(radius){
    return 2*radius;
}
const area = function(radius){
    return Math.PI * radius * radius;
}

console.log(calculate(area, [1,2,3,4]));
