import React,{createContext, useState} from 'react'

export const RegisterContext = createContext()

function Context({children}) {

    const [register, setregister] = useState(null)

    return (
        <RegisterContext.Provider value={[register, setregister]} >
            {children}
        </RegisterContext.Provider >
    )
}

export default Context
