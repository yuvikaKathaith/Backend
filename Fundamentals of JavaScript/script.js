let arr = [1,2,3,4,5,6,7,8,9,10];

// forEach
arr.forEach((element) => {
    console.log(element*4);
})

// map 
let newArrMap = arr.map((element) => {
    return element*10;
})
console.log(newArrMap);

//filter
let newArrFilter = arr.map((element) => {
    if(element > 4)  return true;
    else return false;
})
console.log(newArrFilter);

//find
let ans = arr.find((element) => {
    if(element === 4) return element;
});
console.log(ans);

//indexOf
console.log(arr.indexOf(12));
console.log(arr.indexOf(2));

//objects
var obj = {
    name: 'yuvika',
    class: 'ece-b'
}
console.log(obj['class']);
console.log(obj.name);