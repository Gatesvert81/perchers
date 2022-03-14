import React, { createContext, useState } from 'react'


export const IsLoggedInContext = createContext()

function Context({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(null)

    return (

        <IsLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]} >
            {children}
        </IsLoggedInContext.Provider>
    )
}

export default Context
