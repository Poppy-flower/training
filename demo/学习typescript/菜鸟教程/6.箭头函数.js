//箭头函数的好处： 可以自动将函数中的 this 附加到上下文中
var shape = {
    name: 'rectangle',
    popup: function () {
        var _this = this;
        console.log("this inside popup(): " + this.name);
        // setTimeout(function() {
        //     console.log(`this inside setTimeout(): ${this.name}`);
        //     console.log(`I'm a ${this.name} !`);
        // }, 3000)
        setTimeout(function () {
            console.log("this inside setTimeout(): " + _this.name);
            console.log("I'm a " + _this.name + " !");
        }, 3000);
    }
};
shape.popup();
