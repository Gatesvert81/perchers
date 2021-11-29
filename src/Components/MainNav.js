import React, { useState } from 'react'
import Button from '../styledComponents/Button'
import Nav from '../styledComponents/Nav'
import NavWrapper from '../styledComponents/NavWrapper'
import ProfileCard from '../Components/ProfileCard'
import Image from 'next/image'
import menu from '../../public/menu.png'
import notify from '../../public/notify.png'
import AnchorLink from './AnchorLink'

function MainNav({ children }) {

    const [sideNav, setSideNav] = useState(false)

    const sideNavMainBtns = [
        {
            name: 'My Rental',
            seen: false,
            route: "/profile/rentals",
            number: 0
        },
        {
            name: 'Messages',
            route: "/profile/chat/",
            seen: true,
            number: 4
        },
        {
            name: 'Favorites',
            route: "/profile/rentals",
            seen: false,
            number: 0
        }
    ]


    return (
        <>
            <Nav className="list__nav" >
                <NavWrapper className="list__nav__main" >
                    <NavWrapper className="list__nav__logo" >
                        <AnchorLink route="/dorms">
                            PINQL
                        </AnchorLink>
                    </NavWrapper>
                    <NavWrapper className="list__nav__filters" >
                        {children}
                    </NavWrapper>
                </NavWrapper>
                <NavWrapper className="list__nav__btns" >
                    <Button name="icon" >
                        <Image
                            src={notify}
                            layout="fill" />
                    </Button>
                    <Button
                        click={() => setSideNav(true)}
                        name="icon"
                    >
                        <Image
                            src={menu}
                            layout="fill" />
                    </Button>
                </NavWrapper>
            </Nav>
            <NavWrapper className="side__nav" open={sideNav} >
                <NavWrapper className="side__nav__main"  >
                    <NavWrapper
                        className="side__nav__cancel"
                        onClick={() => setSideNav(false)}
                    >

                    </NavWrapper>
                    <NavWrapper className="side__nav__profile" >
                        <ProfileCard className="side__nav__proflie__btn" >
                            <AnchorLink route="/profile">
                                <Button name="tetiary expand">
                                    Edit Profile
                                </Button>
                            </AnchorLink>
                            <AnchorLink route="/host">
                                <Button name="tetiary expand">
                                    Host a Room
                                </Button>
                            </AnchorLink>
                        </ProfileCard>
                    </NavWrapper>
                    <NavWrapper
                        className="side__nav__main__btns"
                    >
                        {
                            sideNavMainBtns.map((btn, index) => (
                                <AnchorLink route={btn.route} key={index} >
                                    <Button
                                        name="side__nav__btn"  >
                                        <NavWrapper className="side__nav__btn__text" >
                                            {btn.name}
                                        </NavWrapper>
                                        <NavWrapper
                                            className="side__nav__btn__num"
                                            seen={btn.seen}
                                            empty={btn.number > 0}
                                        >
                                            {btn.number}
                                        </NavWrapper>
                                    </Button>
                                </AnchorLink>
                            ))
                        }

                    </NavWrapper>
                </NavWrapper>
                <NavWrapper>
                    <Button name="secondary" >
                        Log out
                    </Button>
                </NavWrapper>
            </NavWrapper>
        </>
    )
}

export default MainNav
