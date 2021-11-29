import React from 'react'
import ChatWrapper from '../styledComponents/ChatWrapper'
import Text from '../styledComponents/Text'

function MessageCard({ image, children, fromMe }) {
    return (
        <ChatWrapper className="message__card" fromMe={fromMe} >
            <ChatWrapper className="message__card__image">
                
            </ChatWrapper>
            <ChatWrapper className="message__card__main" fromMe={fromMe} >
                <Text className="message__card__text" >
                    {children}
                </Text>
                <Text className="message__card__sub" >
                    read
                </Text>
            </ChatWrapper>
        </ChatWrapper>
    )
}

export default MessageCard
