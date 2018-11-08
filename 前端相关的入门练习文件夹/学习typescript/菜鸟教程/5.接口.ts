interface Shape{
    name: string;
    width: number;
    height: number;
    color?: string;
}


//接口可以作为一个类型批注
function area(shape: Shape) {
    var area = shape.width * shape.height;
    return `I'm ${shape.name}, my area is ${area}!`;
}

console.log(area( {name: 'rectangle', width: 30, height: 15}));
console.log(area({name: 'square', width: 30, height: 30, color: 'blue'}));
// console.log(area({width: 30, height: 15}));