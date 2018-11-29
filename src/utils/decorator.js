// 修饰器是一个对类进行处理的函数。修饰器函数的第一个参数，就是所要修饰的目标类。

function test(target){
    // console.log(target)  // 输出的是一个类 要注意类的方法类的实例不能使用 所以如果是要
                         // 给类的实例使用 要挂载原型上
    target.prototype.getDate = ()=>{
        console.log( new Date() )
    }
}


// class A {
//     test(){  // 写在这里的方法在原型上 只能实例（new A()）调用
//         alert(1)
//     }
// }

// A.test2 = ()=>{   // 写在这里在constructor上 只能类（A）调用
//     alert(22)
// }
// console.log(new A())

export {
    test
}