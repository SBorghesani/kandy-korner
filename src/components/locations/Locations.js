import React, { useEffect, useState } from "react"
import { getAllLocations } from "../ApiManager"

export const Locations = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            getAllLocations()
                .then((locationArray) => {
                    setLocations(locationArray)
                })
        },
        []
    )

    return (

        <>
            {
                locations.map(
                    (location) => { 
                        return <p key={`location--${location.id}`}>{location.address}</p>
                    }
                )
            }
        </>
    )
}
