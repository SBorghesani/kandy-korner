import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { deleteEmployee, getEmployeesAndLocation } from '../ApiManager'


export const EmployeeList = () => {
    const [employees, setEmployee] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getEmployeesAndLocation()
                .then((employeeArray) => {
                    setEmployee(employeeArray)
                })
        },
        []
    )

    const fireEmployee = (id) => {
        deleteEmployee(id)
            .then(() => {
                getEmployeesAndLocation()
                    .then((data) => {
                        setEmployee(data)
                    })
            })
    }

    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/EmployeeForm")}>Apply</button>
            </div>

            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name} works at {employee.location.address}
                            <button onClick={() => {
                                fireEmployee(employee.id)
                            }}>Terminate</button>

                        </p>
                    }
                )
            }
        </>
    )
}