/**
 * 这是一个node 的 demo，请求三个接口，3依赖2，2依赖1
 *
 */
const request = require('request');

request('http://www.baidu.com', function(error, response){
    if(!error && response.statusCode === 200 ){
        console.log('get times 1');

        request('http://www.baidu.com', function(error, response){
            if(!error && response.statusCode === 200 ){
                console.log('get times 2');

                request('http://www.baidu.com', function(error, response){
                    if(!error && response.statusCode === 200 ){
                        console.log('get times 3');
                    }
                });

            }
        });
    }
});