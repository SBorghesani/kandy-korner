import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from './customers/CustomerList'
import { Products } from './products/Products'
import { Locations } from './locations/Locations'
import { EmployeeList } from './employees/Employees'
import { EmployeeForm } from './employees/EmployeeForm'
import { Orders } from './orders/Orders'

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/products">
                <Products />
            </Route>

            <Route path="/locations">
                <Locations />
            </Route>

            <Route path="/employees/employeeForm">
                <EmployeeForm />
            </Route>

            <Route exact path="/orders/">
                <Orders />
            </Route>
        </>
    )
}

