//加载handlebars模块
var hbs = require("hbs");

//指定模块文件的后缀名为html
app.set('view engine', 'html');

//运行hbs模块
app.engine('html', hbs._express);
