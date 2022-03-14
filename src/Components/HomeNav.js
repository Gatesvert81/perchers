import React from 'react'
import Button from '../styledComponents/Button'
import Nav from '../styledComponents/Nav'
import NavWrapper from '../styledComponents/NavWrapper'
import AnchorLink from './AnchorLink'
import Image from 'next/image'
import arrow from '../../public/arrow.png'
import Text from '../styledComponents/Text'

// Landing Page Navigation Bar 
function HomeNav() {

    return (
        <Nav className="homenav" >
            <NavWrapper className="homenav__logo">
                <Button name="list__nav__btn" >
                    PINQL
                </Button>
            </NavWrapper>
            <NavWrapper className="homenav__main" >
                <NavWrapper className="homenav__main__btn">
                    <NavWrapper>
                        <Button>
                            Discover
                        </Button>
                    </NavWrapper>
                    <NavWrapper>
                        <Button>
                            Help
                        </Button>
                    </NavWrapper>
                </NavWrapper>
                <NavWrapper className="homenav__signup" >
                    <AnchorLink route={`/registration?registerValue=${false}`} >
                        <Button
                            name="sign__in__btn"
                        >
                            <Text className="sign__up__btn__text" >
                                Sign In
                            </Text>
                            <Image
                                src={arrow}
                                width={'30px'}
                                height={`30px`}
                            />
                        </Button>
                    </AnchorLink>
                    <AnchorLink route={`/registration?registerValue=${true}`} >
                        <Button
                            name="sign__up__btn"
                        >
                            <Text className="sign__up__btn__text" >
                                Sign Up
                            </Text>
                            <Image
                                src={arrow}
                                width={'30px'}
                                height={`30px`}
                            />
                        </Button>
                    </AnchorLink>
                </NavWrapper>
            </NavWrapper>
        </Nav>
    )
}

export default HomeNav
