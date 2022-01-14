
const fs = require('fs')
//const chulk = require('chalk')
const sample = fs.readFileSync('./sample.json')
const databuffer = sample.toString()
const data = JSON.parse(databuffer)

// getSystems
// getOrganisations
const system1 =(name,callback)=>{
    if(name==="getSystem"){
        callback(undefined,data.system)
    } else if(name==="getOrganisation"){
        callback(undefined,data.Organisation)
    } else{
        callback("Please Provide getSystem or getOrganisation",undefined)
    }

}
system1('getSystem',(error,result)=>{
console.log(error)
console.log(result)
})
const name ='Vijay'
module.exports = system1