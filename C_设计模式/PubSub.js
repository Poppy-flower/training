/**
 * 发布订阅模式
 */

class PubSub{
    constructor(){
        this.events = {};  //events是一个对象，保存所有的发布订阅，每个消息对应一个数组{event1: [callback1, callback2,...]}
    }

    /**
     * 订阅
     */
    subscribe(event, callback){
        (this.events[event] || []).push(callback);  //往events里面加回调
    }

    /**
     * 发布
     */
    publish(event, ...args){
        let subscribeEvents = this.events[event];  //把订阅了该事件的回调全部取出来，然后依次执行

        if(!!subscribeEvents && subscribeEvents.length){
            subscribeEvents.forEach((callback)=>{
                callback.call(this, ...args);
            });
        }
    }

    /**
     * 解除订阅
     */
    unsubscribe(event, callback){
        let subscribeEvents = this.events[event];  //把订阅了该事件的回调全部取出来，然后过滤一下，删除指定的回调

        if(!!subscribeEvents && subscribeEvents.length){
            this.events[event] = this.events[event].filter(cbk=>cbk!==callback)
        }
    }
}

export default PubSub;