import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { setEmployeesAndLocations } from "../ApiManager";

export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState({
        name: "",
        location: "",
        manager: null,
        fullTime: null,
        hourlyRate: 0
    });

    const history = useHistory()

    const submitEmployee = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate
        }

        setEmployeesAndLocations(newEmployee)
        .then(() => {
            history.push("/employees")
        })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={
                            (event) => {
                                const copyState = { ...employee }
                                copyState.name = event.target.value
                                updateEmployee(copyState)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Your Name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Choose a location:</label>
                    <div 
                        onChange={
                            (event) => {
                                const copyState = { ...employee }
                                copyState.locationId = parseInt(event.target.value)
                                updateEmployee(copyState)
                            }
                        }>
                            <input type="radio" value={1} name="location"/> 2200 Boston Ave.
                            <input type="radio" value={2} name="location"/> 111 ABC Rd.
                            <input type="radio" value={3} name="location"/> 550 Main St.
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Are you applying for a management position?</label>
                    <div 
                        onChange={
                            (event) => {
                                const copyState = { ...employee }
                                copyState.manager = (event.target.value === 'true' ? true : false)
                                updateEmployee(copyState)
                            }
                        }>
                            <input type="radio" value={true} name="manager"/> Yes
                            <input type="radio" value={false} name="manager"/> No
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Are you willing to work full time?</label>
                    <div 
                        onChange={
                            (event) => {
                                const copyState = { ...employee }
                                copyState.fullTime = (event.target.value === 'true' ? true : false)
                                updateEmployee(copyState)
                            }
                        }>
                            <input type="radio" value={true} name="fullTime"/> Yes
                            <input type="radio" value={false} name="fullTime"/> No
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Desired starting rate</label>
                    <div 
                        onChange={
                            (event) => {
                                const copyState = { ...employee }
                                copyState.hourlyRate = parseInt(event.target.value)
                                updateEmployee(copyState)
                            }
                        }>
                            <input type="number" name="hourlyRate"/> 
                    </div>
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={submitEmployee}>
                Submit
            </button>
        </form>
    )
}