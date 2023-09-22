// const a = require('./app');

// var b = [1, 2, 3, 4,4, 5];

// console.log(a.x, a.y);

//*** filter executes the callback and check its return value ***//
// b.filter((x) =>
// {
//     console.log(x);   
// });

// var result = b.filter((x)=>
// {
//     return x< 4;
// })

// console.log(result);

//*** forEach just loop over the array and executes the callback ***//

// result.forEach((x)=>
// {
//     console.log(x); 
// })

//***filesystem in node.js***//

// const fs = require('fs');

// fs.writeFileSync('hello.txt',"hello everyone");


//***create simple server***//

// const s = require('http');

// s.createServer((req,resp)=>
// {
//     resp.write('<h1>My name is Ram Patidar</h1>');
//     resp.end();
// }).listen(4500);


//*** package.json color module use ***//

// const colors = require('colors');
// console.log("India".green);

// console.log("Indonesian".yellow);


//*** making simple api function in node.js ***//

// const api = require('http');
// const data = require('./data');

// api.createServer((req,Response)=>
// {
//     Response.writeHead(200);
//     Response.write(JSON.stringify(data));
//     Response.end();

// }).listen(4500);


//*** Getting input from command line ***//

// const fs1 = require('fs');
// const input = process.argv;


// if(input[2] == 'add')
// {
//     fs.writeFileSync(input[3],input[4]);
// }else if(input[2] == 'remove')
// {
//     fs.unlinkSync(input[3]);
// }else{
//     console.log('invalid arvg');
// }


//** Display file list from folder  ***/

// const fs1 = require('fs');
// const path1 = require('path');
// const { error } = require('console');
// const dirname = path1.join(__dirname,'files');
// const filename = `${dirname}/file0.txt`

// console.log(filename)



// for (index = 0; index <4; index++)
// {
//     fs1.writeFileSync(dirname+'/file'+index+'.txt',"this is new dilr");
    
// }


// fs1.readdir(dirname,(error,files)=>
// {
//     files.forEach((items)=>
//     {
//         console.log(items);
//     })
// })

// fs1.readFile(filename,'utf-8',(error,item)=>
// {
//     console.log(item);
// });

// fs1.appendFile(filename,' updated content',(err)=>
// {
//     if(!err)
//     {
//         console.log("file is updated")
//     }
// });

//***Handle asynochronize data ***//

// let a1=3;
// let b1= 3;
// let waitingdata = new Promise((Response,rejected)=>
// {
//     setTimeout(()=>
//     {
//         Response(20);
//     },2000)
// })

// waitingdata.then((data)=>
// {
//     b1 = data;
//     console.log(a1+b1);
// })

// const data1 = require("./data")

// const pr = data1(4,3)

// console.log(pr)

const yargs = require('yargs')

//command to list 
// yargs.command({
//     command:'list',
//     describe:'listing in the note',
//     handler: function()
//     {
//         console.log('listing the note in the ndote list')
//     }
// })

const notes = require('./data.js')

yargs.command({
    command: 'remove',
    describe:"adding the notes",
    builder:{
        title:{
            type :'string',
            demandOption:true
        },
        body:{
            type :"string",
            demandOption : false,
        },
    },
    handler: function(argv)
    {
        console.log('called')
        // notes.addnotes(argv.title,argv.body);
        notes.removenotes(argv.title);

        
    }
})

console.log(yargs.argv)

// const fs = require('fs');
// const { title } = require('process');
// const { bold } = require('colors');

// const info={
//     name : 'ram',
//     email : 'rampatidar9911@gmail.com',
//     age : 22,
// }

// const Jsondata= JSON.stringify(info);
// const data = JSON.parse(Jsondata);

// fs.writeFileSync('json.json',Jsondata)
// const buffer = fs.readFileSync('json.json');
// const readdata = JSON.parse(buffer)
// console.log(readdata)



