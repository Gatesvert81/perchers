import React, { useState } from 'react'
import AnchorLink from '../../src/Components/AnchorLink'
import MainNav from '../../src/Components/MainNav'
import Button from '../../src/styledComponents/Button'
import RegisWrapper from '../../src/styledComponents/RegisWrapper'
import RentalWrapper from '../../src/styledComponents/RentalWrapper'

function rentals() {


    const [register, setRegister] = useState(true)
    const [rentals, setRentals] = useState(null)
    const [favourites, setFavourites] = useState(null)

    return (
        <RentalWrapper className="rental">
            <MainNav></MainNav>
            <RentalWrapper className="rental__page">
                <RentalWrapper register={register} className="rental__section" >
                    <RegisWrapper className="registration__tab" >
                        <Button
                            click={() => setRegister(false)}
                            name="sign__tab__btn sign__in__tab__select"
                            select={register}
                        >
                            Sign In
                        </Button>
                        <Button
                            click={() => setRegister(true)}
                            name="sign__tab__btn sign__up__tab__select"
                            select={register}
                        >
                            Sign Up
                        </Button>
                    </RegisWrapper>
                </RentalWrapper>
                <RentalWrapper className="rental__main" >
                    {
                        register ? (
                            <RentalWrapper className="rental__render" >
                                {
                                    rentals ? "You have rentals" : (
                                        <RentalWrapper className="render__empty">
                                            <RentalWrapper className="render__empty__head">
                                                You have not rent out any room.
                                            </RentalWrapper>
                                            <RentalWrapper className="render__empty__btn">
                                                <AnchorLink route="/host">
                                                    <Button name="primary" >
                                                        Host a room
                                                    </Button>
                                                </AnchorLink>
                                            </RentalWrapper>
                                        </RentalWrapper>
                                    )
                                }
                            </RentalWrapper>
                        ) : (
                            <RentalWrapper className="rental__render">
                                {
                                    favourites ? "You have rentals" : (
                                        <RentalWrapper className="render__empty" >
                                            <RentalWrapper className="render__empty__head">
                                                You have no favourites.
                                            </RentalWrapper>
                                            <RentalWrapper className="render__empty__btn">
                                                <AnchorLink route="/dorms">
                                                    <Button name="primary" >
                                                        Add Favourties
                                                    </Button>
                                                </AnchorLink>
                                            </RentalWrapper>
                                        </RentalWrapper>
                                    )
                                }
                            </RentalWrapper>
                        )
                    }
                </RentalWrapper>
            </RentalWrapper>
        </RentalWrapper>
    )
}

export default rentals
