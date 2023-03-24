/*
* 闭包的bug
* 如何改变obj中 a、b的值
* */

// function test() {
//     let obj = {
//         a: 1,
//         b: 2
//     }
//     return function (key) {
//         return obj[key];
//     }
// }
//
// let get = test();
//
// Object.defineProperty(Object.prototype, 'abc', {
//     value: () => {
//         return this;
//     }
// })
// console.log(get('abc').valueOf())

/****************************/

function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12