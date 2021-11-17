import React, { useEffect, useState } from "react"



export const LocationsList = () => {
    // declaring variable "locations" that DEFINES STATE
    // declaring variable "setLocations" that defines function that will MODIFY STATE/SET VALUE OF EMPLOYEES
    // useState STORES STATE passes a value as argument and returnes ARRAY WHEN INVOKED
    const [locations, setLocations] = useState([])

    useEffect(
        // *LISTENING FOR STATE CHANGES AND REACTS*
        // takes a function and array as arguments & runs code when state changes (event listener)
        () => {
            fetch("http://localhost:8088/locations")
                // fetching data from the API and parsing into application state
                .then(res => res.json())
                // you have final array of locations defined in line 9
                .then(
                    (locations) => {
                        setLocations(locations)
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
                // iterate locations and convert to objects to JXS (converstion = .map())
                locations.map(
                    // parameter to capture each indivual locationsObj as iterates
                    (locationsObj) => {
                        // uniquely identify <h2> with a key, use .id since unique identifier
                        return <h4 key={`locations--${locationsObj.id}`}>{locationsObj.address}</h4>
                    }
                )
            }
        </>
    )
}
