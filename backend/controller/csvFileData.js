const csv = require('csv-parser');
const fs = require('fs');
var path=require('path');
module.exports.getData=(req,res)=>{
    let results = [];
    let filePath=path.normalize(__dirname+'/../'+'Data.csv');
    fs.createReadStream(filePath)
    .on('error', (err) => {
        res.status(400).send({message:err.message})
    })
    .pipe(csv())
    .on('data', (data) => {
        if(req.params.type==data["Type"]){
            results.push(data)
        }
    })
    .on('end', () => {
        res.send(results)
    });
}

module.exports.getTypes=(req,res)=>{
    let types=[];
    let filePath=path.normalize(__dirname+'/../'+'Data.csv');
    fs.createReadStream(filePath)
    .on('error', (err) => {
        res.status(400).send({message:err.message})
    })
    .pipe(csv())
    .on('data', (data) => {
        if(data["Type"]&&types.indexOf(data["Type"])===-1){
            types.push(data["Type"])
        }
    })
    .on('end', () => {
        res.send(types)
    });
}
