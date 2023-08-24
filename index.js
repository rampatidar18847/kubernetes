const a = require('./app');

var b = [1, 2, 3, 4,4, 5];

// console.log(a.x, a.y);

b.filter((x) =>
{
    console.log(x);   //filter executes the callback and check its return value.
});

var result = b.filter((x)=>
{
    return x< 4;
})

  
console.log(result);

result.forEach((x)=>
{
    console.log(x); //forEach just loop over the array and executes the callback 
})

const fs = require('fs');

fs.writeFileSync('hello.txt',"hello everyone");

console.log('hello.txt');

const s = require('http');

s.createServer((req,resp)=>
{
    resp.write('<h1>My name is Ram Patidar</h1>');
    resp.end();
}).listen(4500);