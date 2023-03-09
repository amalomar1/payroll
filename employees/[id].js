
import fs from "fs"
import path from "path"

function getData(){
    const filePath=path.join(process.cwd(),"data", "employees.json")
    const fileData=fs.readFileSync(filePath)
    const data=JSON.parse(fileData)
    return data
}

export default function handler(req, res){
     const{
       query:{id},
       method
       }=req;
       if(method==="GET"){
         const data=getData()
         const employeById=data.findById(id);
         res.status(200).json({success:true,employee:employeById});
}
}