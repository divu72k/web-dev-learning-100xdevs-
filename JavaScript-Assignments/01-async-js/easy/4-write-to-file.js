// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require("fs")

function writeToFile(filePath,msg){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,msg,err=>{
            if (err){
                reject(err);
            }else{
                resolve("File written successfully");
            }
        })
    })
}


writeToFile("demo.txt","HALOOOO").then(msg=>console.log(msg)).catch(err=>console.log(err))