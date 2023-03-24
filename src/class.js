// class A {
//     name = '小'
//     constructor(name) {
//         this.name = name;
//     }
//     getName(){
//         return this.name;
//     }
//
// }
// class B extends A{
//     age = 18;
//     constructor(age, name) {
//         super(name);
//         this.age = age;
//     }
//     getAge() {
//         return this.age;
//     }
// }
//
// class C extends  B {
//     constructor(sex) {
//
//         super(20, "c1");
//         this.sex = sex;
//     }
//     getSex() {
//         return this.sex;
//     }
// }
//
// let c1 = new C('male')
// console.log(c1);
// console.log(c1.getSex(), c1.getName(), c1.getAge());

// let a = {
//     t:1
// }
// let b = Object.create(a)
// console.log(b)


function A (age) {
    this.age = age;
}
/*
* 只有在函数中才会有特殊的属性 `prototype`
* */
A.prototype.getAge = function () {
    return this.age;
}

let newA = new A(18)
console.log(newA)

/*
* h
* */
// Object.getPrototypeOf(newA) === newA.__proto__; //true