import React, { useEffect, useState } from "react"
import { getAllCustomers } from '../ApiManager'


export const CustomerList = () => {

    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            getAllCustomers()
                .then(
                    (customerArray) => {
                    setCustomers(customerArray)
                })
        },
        []
    )

    return (
        <>
            {
                customers.map(
                    (customer) => {
                        return <p key={`customer--${customer.id}`}>{customer.name}</p>
                    }
                )
            }

        </>
    )
}