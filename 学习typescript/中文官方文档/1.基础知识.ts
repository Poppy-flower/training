//数组
let list: number[] = [1, 2, 3];



//元素Touple: 允许表示一个已知元素数量和类型的数组，各元素的类型可以不必相同。
let x: [number, string];
x = [3, 'abcd'];  //ok
x = ['abcd', 3];  //error
console.log(x[1].substr(1)); // OK
console.log(x[0].substr(1));  // Error, 'number' does not have 'substr'
//当访问一个越界的元素，会使用联合类型替代
x[3] = 'world';  // OK, 字符串可以赋值给(string | number)类型
console.log(x[5].toString());  // OK, 'string' 和 'number' 都有 toString
x[6] = true;  // Error, 布尔不是(string | number)类型



//枚举
//enum 类型 是对javascript 数据类型的补充，像C# 一样，使用 枚举类型可以为一组值赋予友好的名字。
enum Color {Red = 1, Green = 2, Blue = 3};
let c: Color = Color.Green;
//使用枚举类型,可以由枚举值得到枚举的名字
let colorName = Color[3];
console.log(colorName);



//任意值
let notSure: any;
notSure = 4;  //ok
notSure = 'abcd';  //ok
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.





// 空值
// void 当一个函数没有任何返回值时，通常它返回的数据类型是void。
// void类型像是与any类型相反，它表示没有任何类型。
function warnUser(): void {
    alert('this is my warning message!');
}
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
let unusable: void = undefined;






//Null & Undefined
//TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和void相似，它们的本身的类型用处不是很大
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
//默认情况下null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给number类型的变量。
//然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。




//类型断言  类型转换  <string> 或者 as
//<string>
let someValue: any = 'this is a string';
let strLength = (<string>someValue).length;
//as
let someValue1: any = 'this is a string';
let strLength1 = (someValue1 as string).length;





//关于let: 尽可能地使用let来代替var








