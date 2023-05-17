import React from "react";
import Expenses from "./Expenses";

const AvailableExpenses=(props)=>{
    return(
       
        <ul>
        {props.onAddExpense.map((expense) => (
               <Expenses 
                  key={expense.id}
                  {...expense}>
              </Expenses>                  
                            
          ))}
          </ul>
             
            
       
    )
}

export default AvailableExpenses;