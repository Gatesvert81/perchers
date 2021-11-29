import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import Button from '../styledComponents/Button'
import CarouselWrapper from '../styledComponents/CarouselWrapper'

function Carousel({ preview, images }) {

    // console.log(images)

    const [currentImage, setCurrentImage] = useState(0)

    // const images = [
    //     'blueviolet', 'bisque', 'azure', 'whitesmoke', 'beige', 'chocolate'
    // ]

    // console.log(images)


    const handleNextImage = useCallback(
        () => {
            if (currentImage < images.length - 1) {
                setCurrentImage(currentImage + 1)
            } else {
                setCurrentImage(0)
            }
        },
        [currentImage],
    )

    const handlePrevImage = useCallback(
        () => {
            if (currentImage > 0 && currentImage < images.length) {
                setCurrentImage(currentImage - 1)
            } else {
                setCurrentImage(images.length - 1)
            }
        },
        [currentImage],
    )

    const handleSelected = (index) => {
        setCurrentImage(index)
    }

    return (
        <CarouselWrapper className="carousel" >
            {
                preview ? (
                    <CarouselWrapper className="carousel__preview__container" >
                        {
                            images?.map((image, index) => (
                                <CarouselWrapper
                                    key={index}
                                    className="carousel__preview"
                                    onClick={() => handleSelected(index)}
                                    selected={images?.[currentImage] === image}
                                    color={image}
                                >
                                    <Image
                                        src={image}
                                        layout="fill"
                                    />
                                </CarouselWrapper>
                            ))
                        }
                    </CarouselWrapper>

                ) : null
            }
            <CarouselWrapper className="carousel__images"
                // color={images?.[currentImage]}
            >
                <Image
                    src={images[currentImage]}
                    layout="fill"
                />
            </CarouselWrapper>
            <CarouselWrapper className="carousel__btns">
                <CarouselWrapper className="carousel__fav" >
                    <Button>
                        Fav
                    </Button>
                </CarouselWrapper>
                <CarouselWrapper className="carousel__control" >
                    <CarouselWrapper className="carousel__control__container" >
                        <CarouselWrapper>
                            <Button click={handlePrevImage} >
                                Prev
                            </Button>
                        </CarouselWrapper>
                        <CarouselWrapper>
                            <Button click={handleNextImage} >
                                Next
                            </Button>
                        </CarouselWrapper>
                    </CarouselWrapper>
                </CarouselWrapper>
            </CarouselWrapper>
        </CarouselWrapper>
    )
}

export default Carousel
