//接口
interface LabelledValue {
    label: string;
    color?: string;
    width?: number;
    readonly x: number;
}

//?: 可选属性
//readonly x  只读属性
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!

//上面代码的最后一行，可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写
a = ro as number[];



//readonly  && const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。
// 做为变量使用的话用const
// 若做为属性则使用readonly




interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}



