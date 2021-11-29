import React from 'react'
import ChatWrapper from '../../../src/styledComponents/ChatWrapper'
import MainNav from '../../../src/Components/MainNav'
import Input from '../../../src/styledComponents/Input'
import Button from '../../../src/styledComponents/Button'
import MessageCard from '../../../src/Components/MessageCard'

function messages() {


    const chat = {
        name: "Gates Vert",
        online: true,
        allMessages: [
            {
                fromMe: false,
                message: "Hi, I want to pay Gh20.00 your bed",
                status: "read"
            },
            {
                fromMe: true,
                message: "Make is Gh25.00 ",
                status: "read"
            },
            {
                fromMe: false,
                message: "Ok",
                status: "read"
            },
            {
                fromMe: false,
                message: "When can I come to see the room ",
                status: "read"
            },
            {
                fromMe: true,
                message: "Within the weekend",
                status: "read"
            },
            {
                fromMe: false,
                message: "Ok, I'll come Saturday.",
                status: "read"
            },
            {
                fromMe: true,
                message: "Ok. I will be waiting",
                status: "read"
            },
        ]
    }


    return (
        <ChatWrapper className="messages" >
            <MainNav>
                <ChatWrapper>
                    {chat.name}
                </ChatWrapper>
            </MainNav>
            <ChatWrapper className="messages__main">
                <ChatWrapper className="messages__render" >
                    {
                        chat.allMessages.map((message, index)  => (
                            <MessageCard key={index} fromMe={message.fromMe} >
                                {message.message}
                            </MessageCard>
                        ))
                    }
                </ChatWrapper>
                <ChatWrapper className="messages__input__btn" >
                    <ChatWrapper>
                        <Input type="text" placeholder="Type your message" className="messages__input" />
                    </ChatWrapper>
                    <ChatWrapper>
                        <Button name="primary" >
                            Send
                        </Button>
                    </ChatWrapper>
                </ChatWrapper>
            </ChatWrapper>
        </ChatWrapper>
    )
}

export default messages
