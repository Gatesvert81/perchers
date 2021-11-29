import React, { useState } from 'react'
import AnchorLink from '../../../src/Components/AnchorLink'
import MainNav from '../../../src/Components/MainNav'
import Button from '../../../src/styledComponents/Button'
import ChatWrapper from '../../../src/styledComponents/ChatWrapper'
import RentalWrapper from '../../../src/styledComponents/RentalWrapper'

import ChatCard from '../../../src/Components/ChatCard'
import { server } from '../../../config'

function index({data}) {

    const [chats, setChats] = useState(true)

    

    return (
        <ChatWrapper className="chats" >
            <MainNav></MainNav>
            <ChatWrapper className="chats__head" >
                Chats
            </ChatWrapper>
            <ChatWrapper className="chats__main" >
                {
                    chats ? (
                        <ChatWrapper className="chats__render" >
                            {
                                data.map((message, index) => (
                                    <ChatCard key={index} name={message.name} image={message.dp} >
                                        {message.lastMessage}
                                    </ChatCard>
                                ))
                            }
                        </ChatWrapper>
                    ) : (
                        <RentalWrapper className="render__empty" >
                            <RentalWrapper className="render__empty__head">
                                You have no Chats.
                            </RentalWrapper>
                            <RentalWrapper className="render__empty__btn">
                                <AnchorLink route="/dorms">
                                    <Button name="primary" >
                                        Home
                                    </Button>
                                </AnchorLink>
                            </RentalWrapper>
                        </RentalWrapper>
                    )
                }
            </ChatWrapper>
        </ChatWrapper>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`${server}/api/chatsAPI`)
    const data = await res.json()



    return {
        props: { data },
    }
}

export default index
