/**
 * 寄生组合继承
 * 核心：
 */
//父类
function Animal(name){
    this.name = name;

    this.sleep = function(){
        console.log(`${this.name} is sleeping!`);
    };
}

//子类
function Cat(name){

}
