import React from 'react'
import Option from '../styledComponents/Option'
import Select from '../styledComponents/Select'

function SelectOptions({ options, selectedOption, children }) {

    const handleSelected = (e) => {
        selectedOption(e.target.value)
    }

    return (
        <Select onChange={handleSelected} >
            <Option>
                {children}
            </Option>
            {
                options?.map((option, index) => (
                    <Option key={index} value={option} >
                        {option}
                    </Option>
                ))
            }
        </Select>
    )
}

export default SelectOptions
