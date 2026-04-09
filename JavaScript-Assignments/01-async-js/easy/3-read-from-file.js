// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const { resolve } = require("dns");
const fs = require("fs")

//const content=fs.readFile("demo.txt","utf-8",printContent)

function printContent(err,content){
    if (err){
        console.log(err)
        return;
    }
    console.log(content)
}

function fsReadFilePromisified(filePath,encoding){
    return new Promise((resolve, reject)=>
        fs.readFile(filePath,encoding,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        }))
}

fsReadFilePromisified("demo.txt","utf-8").then(data=>console.log(data)).catch(err=>console.log(err))