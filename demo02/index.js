/**
 * 任意值
 *
 */
//  1. any用来表示允许赋值为任意类型
var myFavoriteNumber = 'kevin';
myFavoriteNumber = 7;
// 2. 任意值的属性和方法，访问任何属性和方法都是允许的
var anyThing = 'hello';
console.log(anyThing.myName);
anyThing.setName("Jerry");
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
var something;
something = 'seven';
something = 7;
