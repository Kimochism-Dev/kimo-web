import React from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Index = () => {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: '',
            text: '',
            image: 'https://cdn.discordapp.com/attachments/512809986699690004/1131408760355692564/1920x1080-1375174-luffy-sun-god-nika-gear-5-one-piece-4k-pc-wallpaper.jpg',
            position: 'center',
        },
        {
            title: '',
            text: '',
            image: 'https://cdn.discordapp.com/attachments/512809986699690004/1131409125989945374/1920x1080-1350729-Monkey-D.-Luffy-Gear-5-One-PieceLuffy-Joy-Boy-Sun.jpg',
            position: 'center',
        },
        {
            title: '',
            text: '',
            image: 'https://images.alphacoders.com/122/1226564.jpg',
            position: 'center',
        },
    ];

    return (
        <Box
            position={'relative'}
            height={'600px'}
            width={'full'}
            overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <IoIosArrowBack size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <IoIosArrowForward size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {
                    cards.map((card, index) => (
                        <Box
                            key={index}
                            height={'6xl'}
                            position="relative"
                            backgroundPosition={`${card.position}`}
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            backgroundImage={`url(${card.image})`}>
                            {/* This is the block you need to change, to customize the caption */}
                            <Box
                                width={'100%'}
                                height={'100%'}
                                bg={'rgba(0,0,0,0.2)'}
                            >
                                <Container size="container.lg" height="600px" position="relative" textAlign={'center'}>
                                    <Stack
                                        spacing={6}
                                        w={'full'}
                                        maxW={'lg'}
                                        position="absolute"
                                        top="50%"
                                        transform="translate(0, -50%)">
                                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                            {card.title}
                                        </Heading>
                                        <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                                            {card.text}
                                        </Text>
                                    </Stack>
                                </Container>
                            </Box>
                        </Box>
                    ))
                }
            </Slider>
        </Box>
    );
}

export default Index