import React from 'react'
import DormWrapper from '../../src/styledComponents/DormWrapper'
import Head from 'next/head'
import MainNav from '../../src/Components/MainNav'
import ListCard from '../../src/Components/ListCard'
import NavWrapper from '../../src/styledComponents/NavWrapper'
import Input from '../../src/styledComponents/Input'
import Image from 'next/image'
import filter from '../../public/filter.png'
import Button from '../../src/styledComponents/Button'
import Text from '../../src/styledComponents/Text'
import axios from 'axios'


// Display homeoage with list of dormetories 

function Index({ dorms }) {

    console.log(dorms)

    return (
        <DormWrapper className="dorms" >
            <Head>
                <title> Perchers | Hostels and Halls </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

        {/* Main Navigation bar for website  */}

            <MainNav>
                <NavWrapper  >
                    <Input type="text" placeholder="Search for dorms" className="dorm__search__input" />
                </NavWrapper>
                <NavWrapper>
                    <Button name="filter">
                        <Image
                            src={filter}
                            width={'20px'}
                            height={`20px`} />
                        <Text className="filter__btn__text" >
                            Filter
                        </Text>
                    </Button>
                </NavWrapper>
            </MainNav>

            {/* Display dorm lists  */}
            <DormWrapper className="dorms__main" >
                <DormWrapper className="dorms__head" >
                    Availabe Dormetories
                </DormWrapper>
                <DormWrapper className="dorms__render">
                    {
                        dorms?.data.map((room, roomIndex) => (
                            <ListCard room={room} key={roomIndex} />
                        ))
                    }
                </DormWrapper>
            </DormWrapper>
        </DormWrapper>
    )
}

// Fetches room data from api in the API folder in pages folder 

export async function getServerSideProps(context) {
    const response = await axios.get('http://localhost:5000/getRooms')
    const dorms = response.data

    return {
        props: { dorms },
    }
}

export default Index
