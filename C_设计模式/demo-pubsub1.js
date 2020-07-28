/**
 * 这是一个node 的 demo，请求三个接口，3依赖2，2依赖1
 * 这是按照发布订阅模式改写的
 */
import PubSub from 'PubSub';
const request = require('request');

const pubsub = new PubSub();

request('http://www.baidu.com', function(error, response){
    if(!error && response.statusCode === 200 ){
        console.log('get times 1');

        // 发布请求1成功消息
        pubsub.publish('request1Success');
    }
});

// 订阅请求1成功的消息，然后发起请求2
pubsub.subscribe('request1Success', ()=>{
    request('http://www.baidu.com', function(error, response){
        if(!error && response.statusCode === 200 ){
            console.log('get times 2');

            // 发布请求2成功消息
            pubsub.publish('request2Success');
        }
    });
});

// 订阅请求2成功的消息，然后发起请求3
pubsub.subscribe('request2Success', ()=>{
    request('http://www.baidu.com', function(error, response){
        if(!error && response.statusCode === 200 ){
            console.log('get times 2');

            // 发布请求3成功消息
            pubsub.publish('request3Success');
        }
    });
});

