import React, { useContext } from 'react'
import DormWrapper from '../../src/styledComponents/DormWrapper'
import Head from 'next/head'
import NavWrapper from '../../src/styledComponents/NavWrapper'
import MainNav from '../../src/Components/MainNav'
import Text from '../../src/styledComponents/Text'
import Button from '../../src/styledComponents/Button'
import Carousel from '../../src/Components/Carousel'
import Image from 'next/image'
import heart from '../../public/heart.png'
import share from '../../public/share.png'
import { useRouter } from 'next/dist/client/router'
import ProfileCard from '../../src/Components/ProfileCard'
import axios from 'axios'
import { getSession, useSession } from 'next-auth/react'
import Details from '../../src/Components/Details'

// Dorm page to display dorm details of the dorm 

function Dorm({ dormRoom, roomHost }) {

    const router = useRouter()

    const { data: session } = useSession()

    const user = session?.user.data

    const room = dormRoom?.data[0]
    const host = roomHost?.data[0]

    const handleOffer = async () => {
        if (session) {

            if (host?.user_id === user?.id) {
                alert("You own this room")
            } else {
                const response = await axios.get(`http://localhost:5000/getChatId?userId1=${host?.user_id}&userId2=${user?.id}`)
                const chatId = response.data
                console.log("dorm: ",chatId)
                router.push(`/profile/chat/${host?.user_name}?chatId=${chatId.data}`)
            }
        } else {
            alert('You are not signed in')
        }
    }

    const handleViewProfile = () => {
        if (session) {
            router.push('/profile')
        } else {
            alert('You are not signed in')
        }
    }

    const handleShare = () => {
        const currentRoute = router.asPath
        return alert(currentRoute)
    }

    return (
        <DormWrapper className="room__page">
            <Head>
                <title> Perchers | Hostels and Halls </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Dorm Navigation Bar */}
            <MainNav>
            </MainNav>

            <DormWrapper className="room" >
                <DormWrapper className="room__sub__nav" >
                    <DormWrapper className="room__sub__navigation" >
                        <DormWrapper>
                            {/* <AnchorLink route=""> */}
                            Listing
                            {/* </AnchorLink> */}
                        </DormWrapper>
                        <DormWrapper className="room__sub__navigation__arrow" >
                            {`>`}
                        </DormWrapper>
                        <DormWrapper>
                            {room?.description}
                        </DormWrapper>
                    </DormWrapper>
                    <DormWrapper className="room__sub__nav__icons">
                        <DormWrapper>
                            <Button name="icon" click={() => handleShare()}>
                                <Image
                                    src={share}
                                    layout="fill" />
                            </Button>
                        </DormWrapper>
                        <DormWrapper>
                            <Button name="icon">
                                <Image
                                    src={heart}
                                    layout="fill" />
                            </Button>
                        </DormWrapper>
                    </DormWrapper>
                </DormWrapper>
                <DormWrapper className="room__main">
                    <DormWrapper className="room__detail" >
                        <DormWrapper className="room__carousel" >
                            {/* <Carousel preview={true} /> */}
                        </DormWrapper>
                        <DormWrapper className="room__main__details" >
                            <DormWrapper className="room__detail__head" >
                                <DormWrapper >
                                    <Text className="main__head">
                                        {room?.hall_name}
                                    </Text>
                                </DormWrapper>
                                <DormWrapper>
                                    <Text className="head" >
                                        {`${room?.negotiable}  `}
                                    </Text>
                                    <Text className="head" >
                                        {`  GH??${room?.price}`}
                                    </Text>
                                </DormWrapper>
                            </DormWrapper>
                            <DormWrapper className="detail__btns" >
                                <Button
                                    name="offer__btn"
                                    click={() => handleOffer()}
                                >
                                    Make an Offer
                                </Button>
                                <Button
                                    name="primary expand"
                                    click={() => handleOffer()}
                                >
                                    Apply
                                </Button>
                            </DormWrapper>
                            <DormWrapper className="room__description" >
                                <Details room={room} />
                            </DormWrapper>
                        </DormWrapper>
                    </DormWrapper>
                    <DormWrapper className="room__sub">
                        <ProfileCard name={host?.user_name} title="Host"  >
                            <Button
                                name="secondary"
                                click={() => handleViewProfile()}
                            >
                                View Profile
                            </Button>
                        </ProfileCard>
                    </DormWrapper>
                </DormWrapper>
            </DormWrapper>

        </DormWrapper>
    )
}

// Fetches room data from api in the API folder in pages folder 
export async function getServerSideProps(context) {
    const session = await getSession(context)
    const { roomId } = context.query
    const response = await axios.get(`http://localhost:5000/getRoomWithId?roomId=${roomId}`)
    const dormRoom = response?.data

    if (session) {
        const roomHostResponse = await axios.get(`http://localhost:5000/getRoomHost?roomId=${roomId}`)
        const roomHost = roomHostResponse?.data
        return {
            props: { dormRoom, roomHost },
        }
    }

    return {
        props: { dormRoom },
    }
}

export default Dorm
