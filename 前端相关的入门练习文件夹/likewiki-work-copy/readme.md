#### 运行方法
1. 目录切到likewiki-work 文件夹下 执行 npm install 安装依赖
2. 运行可以执行 npm start
3. 想要打包得到打包之后的文件的话 , 可以执行 npm run demo

#### 打包之后的文件在 dist 文件夹下面，js文件夹存放打包之后的js文件， css文件夹存放打包之后的css文件；

#### 对数据结构的说明，数据结构参照 app->components->select->data.json
1. 数据存放在data 里，data 是一个对象数组，每个对象包含 title,key,children(可选)
2. title 为节点的名称； key为节点的唯一标志，必须是唯一的；children 为节点的子节点，也是一个对象数组


    {
      "data" : [
        {
          "title": "植物",
          "key": "0-0",
          "children":[
            {
              "title": "水生植物",
              "key": "0-0-0",
              "src": "/app/files/file1/file1",
              "children":[
                {
                  "title": "海带",
                  "key": "0-0-0-0",
                  "src": "/app/files/file1/file1"
                },
                {
                  "title": "水草",
                  "key": "0-0-0-1",
                  "src": "/app/files/file1/file1"
                }
              ]
            },
            {
              "title": "陆生植物",
              "key": "0-0-1",
              "src": "src0-0-1",
              "children":[
                {
                  "title": "苹果树",
                  "key": "0-0-1-0",
                  "src": "src0-0-1-0"
                },
                {
                  "title": "梨树",
                  "key": "0-0-1-1",
                  "src": "src0-0-1-1"
                }
              ]
            }
          ]
        }
      ]
    }


