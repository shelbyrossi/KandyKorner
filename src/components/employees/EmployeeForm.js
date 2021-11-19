import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { LocationsList } from "../locations/LocationsList";



export const EmployeeForm = () => {
    // creating hook for transient state of ticket info
    const [employeeInfo, update] = useState({
        name: "",
        locationId: 1,
        manager: false,
        fullTime: true,
        hourlyRate: 12
    });


    const history = useHistory()

    const submitEmployee = (evt) => {
        // preventing default behavior of submiting ticket
        evt.preventDefault()
        const newEmployee = {
            // from state to send to API

            name: employeeInfo.name,
            location: employeeInfo.locationId,
            manager: employeeInfo.manager,
            fullTime: employeeInfo.fullTime,
            hourlyRate: employeeInfo.hourlyRate



        }

        // send above object to API
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }
        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
                // programmatically changing url to bring user back to tickets
                // pushing to browser history
            })
    }


    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">HIRING FORM</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="please use full name"
                        // copying existing state with spread operator
                        // brand new object to modify state 
                        // updated when user interacts 
                        onChange={
                            (evt) => {
                                const copy = { ...employeeInfo }
                                copy.name = evt.target.value
                                update(copy)

                            }
                        }

                    />

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location:</label>
                    <select value={employeeInfo.locationId}
                        
                        onChange={
                            (evt) => {
                                const copy = { ...employeeInfo }
                                copy.locationId = evt.target.value
                                update(copy)

                            }
                        } >
                            <option name="locations">Please Select Location</option>
                            <option name="locations">105 Evergreen Way</option>
                            <option name="locations">12 Blah Blvd</option>
                            <option name="locations"> 12 Rosebud Road</option>

                          
                            </select>
                                              
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Manager:</label>
                    <input
                        type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = { ...employeeInfo }
                                copy.manager = evt.target.checked
                                update(copy)

                            }
                        }
                        type="checkbox"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Full Time:</label>
                    <input
                        type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = { ...employeeInfo }
                                copy.fullTime = evt.target.checked
                                update(copy)

                            }
                        }
                        type="checkbox"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Hourly Rate:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="in dollars"
                        // copying existing state with spread operator
                        // brand new object to modify state 
                        // updated when user interacts 
                        onChange={
                            (evt) => {
                                const copy = { ...employeeInfo }
                                copy.hourlyRate = evt.target.value
                                update(copy)

                            }
                        }
                    />
                </div>

            </fieldset>
            <button onClick={submitEmployee} className="btn btn-primary">

                Finish Hiring
            </button>
        </form>
    )
}