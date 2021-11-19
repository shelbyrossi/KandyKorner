
import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from  "./ApplicationViews"



export const KandyKorner = () => {
   

    return (
// <> Fragment - putting all return elements into one JXS element 
        <> 
        <NavBar/>
            <h1>Kandy Korner</h1>
               
                 {/* renders correct component based on url */}
                 <ApplicationViews />

               

        
        </>
    )

}
