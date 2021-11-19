import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const CustomerList = () => {
    // declaring variable "customers" that defines state
    // declaring variable "assigncustomers" that defines function that will modify state/set value of customers
    // useState passes a value as argument and returnes ARRAY WHEN INVOKED
    const [customers, changeCustomer] = useState([])
   

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                // function that takes a function and array as arguments & runs code when state changes (event listener)
                .then(res => res.json())

                // you have final array of customers defined in line 7
                .then((customersFromAPI) =>
                //  // function established in state variable - single argument is new state/API state
                {
                    changeCustomer(customersFromAPI)
                })
        },
        []
    )



  


    return (
        //  <> Fragment - putting all return elements into one JXS element 
   
        <>
           
            {
                // iterate employes array and convert to objects to JXS (converstion = .map())
                customers.map(
                    // // parameter to capture each indivual customerObj as iterates
                    (customer) => {
                        // // uniquely identify <h2> with a key, use .id since unique identifier
                        return <ul><h5 key={`customer--${customer.id}`}>{customer.name} </h5></ul>
                    }
                )
            }
            
          
        </>
    )
}
