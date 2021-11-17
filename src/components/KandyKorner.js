
import React from "react"
import {LocationsList} from './locations/LocationsList'
import { ProductsList } from "./products/ProductList"


export const KandyKorner = () => {
   

    return (
// <> Fragment - putting all return elements into one JXS element 
        <> 
            <h1>Kandy Korner</h1>
               
                <h1>Locations List</h1>
                {/* invoking component */}
                <LocationsList/>
                <h2>Products List</h2>
                <ProductsList/>

               

        
        </>
    )

}
