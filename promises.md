 #Promises:
 - Any async function returns a promise.
 - A promise is an object representation eventual failure or success of an async operation and it's resolving value.
 - It has 3 states:
 (i) Pending- still running
 (ii) Resolve- operation completed ( success )
 (iii) Reject- operation failed ( failure )
 - .then(): used to call a function after the promise succeeds.
 - .catch(): used to call a function after the promise fails.

#Function architecture:
function FUNC(...args){
  return new Promise(
    (resolve,reject)[requires atleast 1 argument]=>{
      //write the actual async function's statements/code
      })

- Promise's constructor takes the function we give as an argument.
- Internally, it uses it's own functions which are resolve and reject.
- .finally(): runs after .then() or .catch().
- Promise.all(): resolves when all promises passed are resolved; fails when one of them fails.
- USE CASES: used when u have a list of promises that you have a list of promises to resolve together.

- Promise.any(): resolves when any of the promise resolves; rejects when all the promises are rejected.
- USE CASES: used when we don't know which of the passed promises will be resolved.

- Promise.race(): resolves when any of the passed promises resolve.
- USE CASES: used when the scenario is time sensitive; it returns the promise that resolved the fastest.

- In async functions, we use await to perform the actions of .then().
- Best way to call a promise is with async function.

#EXAMPLE:

const fs=require("fs")
function cfPromise(filepath){
  return new Promise((resolve,reject)=>{
    if(err){
      reject()
      }else{
        fs.readFile(filepath,"utf-8",(err, data)=>{
          if(err){
            reject()
          }else{
            let cleanData= data.trim()
            fs.writeFile(filepath, cleanData)
            resolve("file cleaned successfully")
            })}})
      }

  async function main(){
    try{
      await cfPromise("a.txt");
      } catch(err){
        console.log("operation removed")
        }}
