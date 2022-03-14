import React from 'react'
import DormWrapper from '../styledComponents/DormWrapper'

function Details({ room }) {
    return (
        <DormWrapper className="details" >
            <DormWrapper className="details__head" >
                Details
            </DormWrapper>
            <DormWrapper className="details__main__section">
                <DormWrapper className="details__section">
                    <DormWrapper className="details__section__head">
                        Description
                    </DormWrapper>
                    <DormWrapper className="details__description">
                        {room?.description}
                    </DormWrapper>
                </DormWrapper>
                <DormWrapper className="details__main">
                    <DormWrapper className="details__section">
                        <DormWrapper className="details__section__head">
                            Essentials
                        </DormWrapper>
                        <DormWrapper>
                            {room?.essentials}
                        </DormWrapper>
                    </DormWrapper>
                    <DormWrapper className="details__section">
                        <DormWrapper className="details__section__head">
                            Occupant type
                        </DormWrapper>
                        <DormWrapper>
                            {room?.occupant_type}
                        </DormWrapper>
                    </DormWrapper>
                    <DormWrapper className="details__section">
                        <DormWrapper className="details__section__head">
                            Number of Occupants
                        </DormWrapper>
                        <DormWrapper>
                            {room?.number_of_occupants}
                        </DormWrapper>
                    </DormWrapper>
                    <DormWrapper className="details__section">
                        <DormWrapper className="details__section__head">
                            Date Posted
                        </DormWrapper>
                        <DormWrapper>
                            {room?.date_submitted}
                        </DormWrapper>
                    </DormWrapper>
                </DormWrapper>
            </DormWrapper>
        </DormWrapper>
    )
}

export default Details
