/*
* 生成随机颜色
* */
function randomColor() {
    let r = Math.floor(Math.random()*256),
        g = Math.floor(Math.random()*256),
        b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}

function randomColor2() {
    //转换成16进制然后截取前6位
    let color = Math.random().toString(16).slice(2,8);
    return color ? color : randomColor2();
}

console.log(randomColor(), randomColor2())