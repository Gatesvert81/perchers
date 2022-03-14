import React, { useEffect, useState } from 'react'
import HostWrapper from '../styledComponents/HostWrapper'
import Text from '../styledComponents/Text'
import Check from './Check'

function HostRoomOptions({ setOptions }) {

    const [occupantType, setOccupantType] = useState('')
    const [bathroomType, setBathroomType] = useState('')
    const [essentialsArray, setEssentialsArray] = useState([])


    
    const essArr = [...essentialsArray]
    
    useEffect(() => {
        setOptions({
            bathroomType: bathroomType,
            occupantType: occupantType?.toLowerCase(),
            essArr: essArr
        })
    }, [bathroomType,occupantType,essentialsArray])

    const handleEssentials = (essential, setFunc) => {
        const condition = essArr.includes(essential)
        if (condition) {
            const index = essArr.indexOf(essential)
            essArr.splice(index, 1)
            console.log("essArr: ", essArr)
            setFunc(essArr)
        } else {
            essArr.push(essential)
            console.log("essArr: ", essArr)
            setFunc(essArr)
        }
        return hasEssential(essential)
    }

    const handleOccupant = (checkValue, setFunc) => {
        const condition = checkValue !== occupantType
        if (condition) {
            setFunc(checkValue)
        } else {
            setFunc(null)
        }
    }

    const handleBathroomType = (checkValue, setFunc) => {
        const condition = checkValue !== bathroomType
        if (condition) {
            setFunc(checkValue)
        } else {
            setFunc(null)
        }
    }


    const hasEssential = (value) => {
        return essArr.includes(value)
    }


    return (
        <>
            <HostWrapper className="host__section">
                <HostWrapper className="host__sub__section">
                    <Text className="host__sub__text">
                        Occupant Type
                    </Text>
                </HostWrapper>
                <HostWrapper className="host__check__section" >
                    <Check setCheckedValue={setOccupantType} isCheck={occupantType === 'Whole'} handleCheck={handleOccupant} >
                        Whole
                    </Check>
                    <Check setCheckedValue={setOccupantType} isCheck={occupantType === 'Perch'} handleCheck={handleOccupant} >
                        Perch
                    </Check>
                </HostWrapper>
            </HostWrapper>
            <HostWrapper className="host__section">
                <HostWrapper className="host__sub__section">
                    <Text className="host__sub__text">
                        Bathroom
                    </Text>
                </HostWrapper>
                <HostWrapper className="host__check__section">
                    <Check setCheckedValue={setBathroomType} isCheck={bathroomType === 'In room'} handleCheck={handleBathroomType} >
                        In room
                    </Check>
                    <Check setCheckedValue={setBathroomType} isCheck={bathroomType === 'On floor'} handleCheck={handleBathroomType} >
                        On floor
                    </Check>
                </HostWrapper>
            </HostWrapper>
            <HostWrapper className="host__section">
                <HostWrapper className="host__sub__section">
                    <Text className="host__sub__text">
                        Essentials
                    </Text>
                </HostWrapper>
                <HostWrapper className="host__check__section">
                    <Check
                        setCheckedValue={setEssentialsArray}
                        handleCheck={handleEssentials} >
                        Fridge
                    </Check>
                    <Check
                        setCheckedValue={setEssentialsArray}
                        handleCheck={handleEssentials} >
                        Cooker
                    </Check>
                    <Check
                        setCheckedValue={setEssentialsArray}
                        handleCheck={handleEssentials} >
                        Fan
                    </Check>
                    <Check
                        setCheckedValue={setEssentialsArray}
                        handleCheck={handleEssentials} >
                        WiFi
                    </Check>
                    <Check>
                        Other
                    </Check>
                </HostWrapper>
            </HostWrapper>
        </>
    )
}

export default HostRoomOptions
