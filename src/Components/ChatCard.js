import React from 'react'
import Image from 'next/image'
import ChatWrapper from '../styledComponents/ChatWrapper'
import AnchorLink from './AnchorLink'

function ChatCard({ children, image, name }) {
    return (
        <AnchorLink route={`/profile/chat/${name}`} >
            <ChatWrapper className="chat__card" >
                <ChatWrapper className="chat__card__image__box" >
                    <ChatWrapper className="chat__card__image" >
                        <Image src={image} layout="fill" />
                    </ChatWrapper>
                </ChatWrapper>
                <ChatWrapper className="chat__card__main">
                    <ChatWrapper className="chat__card__name">
                        {name}
                    </ChatWrapper>
                    <ChatWrapper className="chat__card__message">
                        {children}
                    </ChatWrapper>
                </ChatWrapper>
            </ChatWrapper>
        </AnchorLink>
    )
}

export default ChatCard
