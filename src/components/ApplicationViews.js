import React from "react"
import { Route } from "react-router-dom"
import { ProductsList } from "./products/ProductList"
import { LocationsList } from "./locations/LocationsList"

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



        </>
    )
}
