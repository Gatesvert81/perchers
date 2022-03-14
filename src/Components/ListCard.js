import React from 'react'
import Button from '../styledComponents/Button'
import ListWrapper from '../styledComponents/ListWrapper'
import Text from '../styledComponents/Text'
import AnchorLink from './AnchorLink'
import Image from 'next/image'

// Card to display dorm details on the homepage 
function ListCard({ expand, room }) {

    console.log(room)
    return (
        <>
            <AnchorLink route={`dorms/${room?.id}?roomId=${room?.id}`} >
                <ListWrapper className="list__card" expand={expand} >
                    <ListWrapper className="list__card__carousel" >
                        {/* <Image
                            src={room?.images[0]}
                            layout="fill"
                        /> */}
                    </ListWrapper>
                    <ListWrapper className="list__card__detail" >
                        <ListWrapper className="list__card__main" >
                            <ListWrapper  >
                                <Text className="list__card__head" >
                                    {room?.university_name}
                                </Text>
                            </ListWrapper>
                            <ListWrapper  >
                                <Text className="list__card__text" >
                                    {room?.hall_name}
                                </Text>
                            </ListWrapper>
                        </ListWrapper>
                        <ListWrapper className="list__card__footer" >
                            <ListWrapper>
                                <Text className="list__card__price" >
                                    {`GH¢${room?.price}`}
                                </Text>
                            </ListWrapper>
                            <ListWrapper>
                                <Button className="tetiary" >
                                    View Detail
                                </Button>
                            </ListWrapper>
                        </ListWrapper>
                    </ListWrapper>
                </ListWrapper>
            </AnchorLink>
        </>
    )
}

export default ListCard
