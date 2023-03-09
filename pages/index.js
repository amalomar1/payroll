import Link from "next/link"
import React from "react"


const Payroll=({employees})=>{
  return(
    <>
       {employees.map(data=> {
         const bsicPay=data.Hoursworked*data.Basicpay

         const totalAllowance= data.houseAllowance + data.conveyanceAllowance + data.childrenEducationAllowance

         const totalReimbursement=data.fuelReimbursements +data.driverReimbursements
         const totalDeduction=data.healthInsurance +data.taxIncome

         const grossPay=basicPay + totalAllowance + totalReimbursement
         const grossPay=basicPay + totalallowance + totalReimbursement

         const netPay=grosspay-totalDeduction
         return(
           <>
           <ul key={data.fullName}>
           <Link href={`/${data._id}`} passHref>
             <a>{data.fullName}</a>
           </Link> 
             <li>${grossPay}</li>
             <li>${netpay}</li>
           </ul>
           </>
           )
           })}
           </>
  )
}
export async function getServerSideProps(){
    
    const data=await fetch(`http://localhost:3000/api/employees/`);
    const employed=await data.json()

    if(!employed){
        return {
            notFound:true
        }
    }
    return{
        props:{
            employees:employed
        }
    }
}

export default Payroll