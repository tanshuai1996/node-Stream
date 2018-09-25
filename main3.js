/*管道流
  就是从一个流中获取数据传到另外一个流中去。
*/
var fs =require('fs');

//创建一个可读流
var readerStream = fs.createReadStream('input1.txt');

//创建一个可写流
var writerStream = fs.createWriteStream('out1.txt');

//管道读写操作
//读取input1.txt文件内容,并内容写入到out1.txt文件中
readerStream.pipe(writerStream);

console.log('程序执行完毕');