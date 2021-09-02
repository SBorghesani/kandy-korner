import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Products.css"
import { getAllProducts, getAllPurchases } from '../ApiManager'

export const Products = () => {
    const [products, setProducts] = useState([])
    const history = useHistory()
    useEffect(
        () => {
                getAllProducts()
                .then((data) => {
                    setProducts(data)
                })
        },
        []
    )

    const createPurchase = (id) => {
        const newPurchase = {
            customerId: parseInt(localStorage.getItem("kandy_customer")),
            productId: id
        }
        getAllPurchases(newPurchase)
            .then(() => {
                history.push("/orders")
            })
    }

    return (

        <>
            <h3>Available Products</h3>
            <div className="products__container">
                <div className="products__header">
                    <div>Name</div>
                    <div>Type</div>
                    <div>Price</div>
                </div>
                {
                    products.map(
                        (product) => {
                            return <ul className="products" key={`product--${product.id}`}>
                                <li className="product" >{product.name}</li>
                                <li className="product type">{product.productType.type}</li>
                                <li className="product price">${product.price}
                                    <button key={`order--${product.id}`} className="order__button"
                                        onClick={() => {
                                            createPurchase(product.id)
                                        }}>
                                        Purchase
                                    </button>
                                </li>
                            </ul>

                        }
                    )
                }

            </div>

        </>
    )
}