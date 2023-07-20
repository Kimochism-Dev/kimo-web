import { Box, Text } from '@chakra-ui/react'
import { Menu, Carousel, News, Footer, Gallery, } from '@/components'
import './styles.css'
import Head from 'next/head'


const Index = () => {
    return (
        <Box
            m={0}
            p={0}
        >
            <Head>
                <title>Kimo 気持ち</title>
            </Head>
            <Menu />
            <Carousel />
            <Gallery />
            <News />
            <Footer />
        </Box>
    )
}

export default Index