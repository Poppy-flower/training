"use strict";

var fs = require('fs');
var http = require('http');

console.log("Server has start-up");

function send(){
    http.request({
        host: '127.0.0.1',
        port: '8888',
        path: '/post',
        method: 'POST',
    }).end(
        console.log("POST 成功")
    );
};

var promise = new Promise(function(resolve, reject){
    fs.readFile('./data.json',function(err,content){
        if(err){
            reject(err);
        }else{
            resolve(content.toString());
        }
    });
});

promise.then(
    function(val){
        fs.appendFile('./copy.json', val, function(err){
           if(err){
               console.log(err);
           } else{
               console.log("已输出至copy.json 中");
               send();
            }
        });
    },
    function(err){
        console.log(err);
    }
).catch(function(err){
    try{
        console.log(err);
    }catch(e){

    }
});



