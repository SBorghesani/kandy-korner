export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(response => response.json())
}

export const getAllProducts = () => {
    return fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
    .then(response => response.json())
}

export const getAllLocations = () => {
    return fetch("http://localhost:8088/locations")
    .then(response=> response.json())
}

export const getUserEmail = (user) => {
    return fetch(`http://localhost:8088/customers?email=${user.email}`)
    .then(res => res.json())
}

export const getExistingUserEmail = (userEmail) => {
    return fetch(`http://localhost:8088/customers?email=${userEmail}`)
    .then(res => res.json())
}

export const registerNewUser = (user) => {
    return fetch("http://localhost:8088/customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
}

export const postNewUser = (user) => {
   return fetch("http://localhost:8088/customers", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
}

export const getAllPurchases = (newPurchaseObject) => {
    return fetch("http://localhost:8088/purchases", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPurchaseObject)
    })
}

export const getEmployeesAndLocation = () => {
    return fetch("http://localhost:8088/employees?_expand=location")
    .then(response => response.json())
}

export const deleteEmployee = (empId) => {
    return fetch(`http://localhost:8088/employees/${empId}`, {
        method: "DELETE"
    })
}

export const getOrdersExpanded = (user) => {
    return fetch(`http://localhost:8088/purchases?_expand=product&_expand=customer&customerId=${user}`)
                .then(response => response.json())
}

export const setEmployeesAndLocations = (employee) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    }

    return fetch("http://localhost:8088/employees?_expand=location", fetchOptions)
}