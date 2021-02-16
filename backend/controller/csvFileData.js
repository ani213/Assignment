const csv = require('csv-parser');
const fs = require('fs');
var path=require('path');
module.exports.getData=(req,res)=>{
    let months={"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"July","08":"Aug","09":"sep","10":"Oct"
    ,"11":"Nov","12":"Dec"
}
    let sendRes={}
    let filePath=path.normalize(__dirname+'/../'+'Data.csv');
    fs.createReadStream(filePath)
    .on('error', (err) => {
        res.status(400).send({message:err.message})
    })
    .pipe(csv())
    .on('data', (data) => {
        
        if(req.params.type==data["Type"]){
            let mon=data["Date"].slice(3,5)
            if(sendRes.hasOwnProperty(months[mon])){
                sendRes[months[mon]]=sendRes[months[mon]]+Number(data["Number"])
            }else{
                sendRes[months[mon]]=Number(data["Number"])
            }
        }
    })
    .on('end', () => {
        let result= Object.keys(sendRes).map((ele,index)=>{
             return {"?Index":index+1,"Type":req.params.type,"Number":sendRes[ele],"Date":ele}
        })
        res.send(result);
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
