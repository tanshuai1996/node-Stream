//写入流

var fs = require('fs');
var data = "菜鸟驿站 www.runoob.com";

//创建一个可写入流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

//使用utf8编码写入数据
writerStream.write(data, 'UTF8');

//标记文件末尾
writerStream.end();

//处理事件 ---> data,end,and erro
writerStream.on('finish', function(){
    console.log('写入完成');
});
writerStream.on('error', function() {
    console.log(err.stack);
});
console.log('程序执行完毕');