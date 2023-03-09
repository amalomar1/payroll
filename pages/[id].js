
import { withApiUrl } from "next-api-url";

export default function Employee({employees}){

    return(
        <>
         {note.map(employee=>{
           return(
            <ul key={employee.fullName}>
             <li>{employee.fullName}</li>
             <li>{employee._id}</li>
             <li>{employee.hoursWorked}</li>
             <li>{employee.basicPay}</li>
             <li>{employee.houseAllowance}</li>
             <li>{employee.conveyanceAllowance}</li>
             <li>{employee.childrenEducationAllowane}</li>
             <li>{employee.fuelReimbursements}</li>
             <li>{employee.driverReimbursements}</li>
             <li>{employee.healthInsurance}</li>
             <li>{employee.taxIncome}</li>
            </ul>
           )
         })}
        </>
    )
}

export const getServerSideProps = withApiUrl(async ({query:{id}}, url) =>{
    // get the current environment
    const {data}= await (await fetch(`${url}/employees/${id}`)).json();
     // extract the data
  
    return {
        props: {
            employees:data
        },
    };
  
})