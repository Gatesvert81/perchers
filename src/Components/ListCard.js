import React from 'react'
import Button from '../styledComponents/Button'
import ListWrapper from '../styledComponents/ListWrapper'
import Text from '../styledComponents/Text'
import AnchorLink from './AnchorLink'
import Carousel from './Carousel'

function ListCard({ expand, room }) {

    // console.log(room.images)

    return (
        <>
            <AnchorLink route={`dorms/${room?.id}`} >
                <ListWrapper className="list__card" expand={expand} >
                    <ListWrapper  className="list__card__carousel" >
                        <Carousel 
                            preview={false} 
                            images={room.images} 
                            />
                    </ListWrapper>
                    <ListWrapper className="list__card__detail" >
                        <ListWrapper className="list__card__main" >
                            <ListWrapper  >
                                <Text className="list__card__head" >
                                    {room?.collegeName}
                                </Text>
                            </ListWrapper>
                            <ListWrapper  >
                                <Text className="list__card__text" >
                                    {room?.description}
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
