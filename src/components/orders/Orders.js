import React, { useEffect, useState } from "react"
import { getOrdersExpanded } from "../ApiManager"



export const Orders = () => {
    const [purchases, setPurchases] = useState([])
    const currentUser = localStorage.getItem("kandy_customer")

    useEffect(
        () => {
            getOrdersExpanded(currentUser)
                .then((purchaseArray) => {
                    setPurchases(purchaseArray)
                })
        },
        [currentUser]
    )


    return (
        <>
            {
                purchases.map(
                    (purchase) => {
                        return <p key={`purchase--${purchase.id}`}>{purchase.customer.name} bought a {purchase.product.name} for ${purchase.product.price}</p>
                    }
                )
            }
        </>
    )
}

