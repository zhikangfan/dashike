/*
* 自定义迭代器
* */

let myIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield '3'
    }
}
for (let value of myIterable){
    console.log(value);
}