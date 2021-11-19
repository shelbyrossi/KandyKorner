import React, { useEffect, useState } from "react"



export const ProductsList = () => {
    // declaring variable "products" that DEFINES STATE
    // declaring variable "setproducts" that defines function that will MODIFY STATE/SET VALUE OF EMPLOYEES
    // useState STORES STATE passes a value as argument and returnes ARRAY WHEN INVOKED
    const [products, setproducts] = useState([])

    useEffect(
        // *LISTENING FOR STATE CHANGES AND REACTS*
        // takes a function and array as arguments & runs code when state changes (event listener)
        () => {
            // Query string parameter
            fetch("http://localhost:8088/products?_expand=productType&_sort-productType&_order-asc")
                // fetching data from the API and parsing into application state
                .then(res => res.json())
                // you have final array of products defined in line 9
                .then(
                    (products) => {
                        setproducts(products)
                    }
                )
        },
        // leave DEPENDANCY ARRAY empty, or infinite loop
        []
    )

    return (
        // <> Fragment - putting all return elements into one JXS element 
        <>



            {
                // iterate products and convert to objects to JXS (converstion = .map())
                products.map(
                    // parameter to capture each indivual productsObj as iterates
                    (productsObj) => {
                        // uniquely identify <h2> with a key, use .id since unique identifier
                        return <h5 key={`products--${productsObj.id}`}>{productsObj.name} {productsObj.productType.category}</h5>
                    }
                )
            }
        </>
    )
}
