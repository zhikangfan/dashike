/*
* 剩余参数
* 如果函数的最后一个命名参数以...为前缀，则它将成为一个由剩余参数组成的真数组，其中从0（包括）到theArgs.length（排除）的元素由传递给函数的实际参数提供。
* */

function test(a, ...otherArgs) {
    console.log(a, otherArgs) //1 [ 2, 3, 4, 6 ]

}
test(1,2,3,4,6)