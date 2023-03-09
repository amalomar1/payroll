import fs from "fs"
import path from "path"

function getData(){
    const filePath=path.join(process.cwd(),"data", "employees.json")
    const fileData=fs.readFileSync(filePath)
    const data=JSON.parse(fileData)
    return data
}

export default function handler(req, res) {
  const {method}=req;
  if(method==="GET"){
    const data=getData()
    return res.status(200).json({employees:data})


}else if(req.method==="POST"){
  const {
    fullName,
    _id,
    hoursWorked,
    basicPay,
    houseAllowance,
    conveyanceAllowance,
    childrenEducationAllowance,
    fuelReimbursements,
    driverReimbursements,
    healthInsurance,
    taxIncome}=req.body
    
    const data=getData()


    const newEmployees={
      fullName,
      _id,
      hoursWorked,
      basicPay,
      houseAllowance,
      conveyanceAllowance,
      childrenEducationAllowance,
      fuelReimbursements,
      driverReimbursements,
      healthInsurance,
      taxIncome
        }

        data.push(newEmployees)
        const filePath=path.join(process.cwd(),"data","employees.json")
        fs.writeFileSync(filePath,JSON.stringify(data))
        return res.status(201).json({message:"Added",employees:newEmployees})
    }

}