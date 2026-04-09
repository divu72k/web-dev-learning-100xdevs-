// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs")

async function fileCleaner(filePath,cleanFIle){
    try{
        let data = await fs.readFile(filePath,"utf-8")
        let cleaned = data.split("\n").map(line => line.replace("/\s+/g", " ")).join("\n")
        fs.writeFile(cleanFIle,cleaned)
    } catch(err){
        console.log(err)
    }
}