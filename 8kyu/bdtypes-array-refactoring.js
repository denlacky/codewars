//DESCRIPTION:
//I've written five functions. Each function receives a parameter arr which is an array.
//Complete the functions using arr inside the function bodies.

//SOLUTION:
const arr=['1','2','3']

function getLength(){
    //return length of arr
    return arr.length
}
function getFirst(){
    //return the first element of arr
    return arr[0]
}
function getLast(){
    //return the last element of arr
    return arr[arr.length-1]
}
function pushElement(){
    var el=1;
    arr.push(el);
    //push el to arr
    return arr;
}
function popElement(){
    //pop an element from arr
    arr.pop();
    return arr
}

console.log("getLength:", getLength())
console.log("getFirst:", getFirst())
console.log("getLast:", getLast())
console.log("pushElement:", pushElement())
console.log("popElement:", popElement())
console.log("popElement:", popElement())

