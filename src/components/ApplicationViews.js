import React from "react"
import { Route } from "react-router-dom"
import { ProductsList } from "./products/ProductList"
import { LocationsList } from "./locations/LocationsList"
import { EmployeeForm} from "./employees/EmployeeForm"
import {EmployeeList} from "./employees/EmployeeList"
import {CustomerList} from "./customers/CustomerList"


// listens for change (click of hyperlink) and renders appropriate component 
export const ApplicationViews = () => {
    return (
        <>
            {/* when the url is Locations, display LocationList  */}
            <Route exact path="/locations">
                {/* child */}
                <LocationsList />

            </Route>
            {/* when the url is products, display ProductList */}
            <Route exact path="/products">
                {/* child */}
                <ProductsList />
            </Route>

            {/* when the url is employees, display EmployeeForm */}
            <Route exact path="/employees/create">
                {/* child */}
                <EmployeeForm />
            </Route>

             {/* when the url is employees, display EmployeeList */}
             <Route exact path="/employees">
                {/* child */}
                <EmployeeList />
            </Route>

             {/* when the url is employees, display EmployeeList */}
             <Route exact path="/customers">
                {/* child */}
                <CustomerList />
            </Route>


        </>
    )
}
