import React, { useEffect, useState } from 'react'
import HostWrapper from '../styledComponents/HostWrapper'
import Check from './Check'

function RoomNegotiation({ setValue }) {

    const [negotialble, setNegotialble] = useState('Non-Negotiable')

    const handleNegotiation = (checkValue, setFunc) => {
        const condition = checkValue !== negotialble
        console.log(condition)
        if (condition) {
            setFunc(checkValue)
        } else {
            setFunc('Non-Negotiable')
        }
    }

    useEffect(() => {
        setValue(negotialble)
        
    }, [negotialble])

    return (
        <>
            <HostWrapper>
                <Check setCheckedValue={setNegotialble} isCheck={negotialble === "Negotiable"} handleCheck={handleNegotiation}  >
                    Negotiable
                </Check>
            </HostWrapper>
        </>
    )
}

export default RoomNegotiation
