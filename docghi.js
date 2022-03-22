const fs = require('fs');
console.log("bat dau");

const content = fs.readFileSync('./docghi.txt');

console.log("noi dung:" + content);

//dấu + tức là cộng chuỗi nên nó sẽ tự convert thành text utf8 
// var x = "noi dung:" + content
// console.log(x)

console.log("noi dung:" , content);

//dùng dấu phẩy nó sẽ đọc từng phần
// console.log("noi dung:")
// console.log(content)
