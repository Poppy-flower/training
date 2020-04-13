
/**
 * 如何用js判断一个对象是不是Array
 * 1. Array.isArray(obj)   调用数组的isArray方法
 * 2. obj instanceof Array   判断对象是不是Array的实例
 * 3. Object.prototype.toString.call(obj) === '[object Array]'   (~~~~~~~~~~~最稳的！！！)
 *    Object.prototype.toString 会取得对象的一个内部属性 【【class】】,
 *    然后根据这个属性，返回一个类似于'【object Array】'的字符串作为结果，
 *    call用来改变this的指向，指向待检测的对象
 * 4. 判断对象是否有push()等方法。（这个方法有兼容问题，但是也是一个简单易用的方法）
 * 5. obj.constructor === array   //true
 *
 *
 *
 * 同理，判断一个对象是否是函数，可以用
 * Object.prototype.toString.call(obj) === '[object Function]'   //返回true or false
 *
 */

