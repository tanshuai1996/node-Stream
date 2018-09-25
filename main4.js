/*链式流
通过连接输出流到另外一个流并创造多个操作链。
*/
var fs = require('fs');
var zlib = require('zlib');

//压缩input2.txt文件为input2.txt.gz
fs.createReadStream('input2.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('input2.txt.gz'));
console.log('文件压缩完成');

