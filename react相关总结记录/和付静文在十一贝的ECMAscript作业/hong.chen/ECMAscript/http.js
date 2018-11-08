'use strict';
var http = require('http');
var fs = require('fs');

console.log("Server has start-up");

http.createServer(function(req, res){
    var body = "";

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {
        // 设置响应头部信息及编码
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf8'});

        //第一种，get请求
        if(req.url == '/get'){
            //文件存在->读文件成功------->将读取的内容也到页面上,否则报错
            var promise = new Promise(function(resolve,reject){
                fs.readFile('./data.json',function(err,content){
                    if(err){
                        reject(err);
                    }else{
                        resolve(content);
                    }
                });
            });

            promise.then(
                function(content){
                    res.write(content);
                    console.log("文件读取成功！");
                    res.end();
                },
                function(err){
                    res.write(err);
                    res.end();
                }
            );
        }else if(req.url == '/post'){   //第二种，post请求
            console.log('success');
            res.end();
        }else{
            res.end();
        }
    });
}).listen(8888);
