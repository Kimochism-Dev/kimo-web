import { Box, Flex, Text } from '@chakra-ui/react'
import Card from './../Card'

const Index = () => {

    const products = [
        {
            id: 0,
            title: 'Chainsaw Man',
            desc: 'Camiseta de Chainsaw Man',
            price: 450,
            image: 'https://i.pinimg.com/564x/3f/01/78/3f017825088b8c9b0dd2a0cdb55c5a91.jpg',
        },
        {
            id: 1,
            title: 'Zero Two Waifu Censored',
            desc: 'Camiseta Zero two anime darling in the franxx',
            price: 450,
            image: 'https://i.pinimg.com/564x/4f/44/0d/4f440d52e763ee041095e25fc6d5c6b2.jpg',
        },
        {
            id: 2,
            title: 'Poster Chainsaw Man',
            desc: 'Poster em MDF chainsaw man',
            price: 450,
            image: 'https://i.pinimg.com/564x/87/05/3d/87053dd5cdd3fd8b32ca39abd2cc2bbd.jpg',
        },
        {
            id: 3,
            title: 'Goth Motocycle Girl',
            desc: 'Camiseta gótica de verão para mulher',
            price: 450,
            image: 'https://i.pinimg.com/564x/c4/1e/05/c41e05434ef61bd16bbe53ea9aeffb41.jpg',
        },
    ]

    return (
        <Box>
            <Text
                textAlign={'center'}
                fontWeight={'bold'}
                fontSize={'32px'}
                py={20}
            >
                Original Kimochism
            </Text>
            <Flex
                justifyContent={'center'}
                flexWrap={'wrap'}
                px={20}
                pb={20}
                gap={10}
            >
                {
                    products &&
                    products.length != 0 &&
                    products.map((product) => {
                        return (
                            <Card
                                key={product.id}
                                title={product.title}
                                desc={product.desc}
                                price={product.price}
                                image={product.image}
                            />
                        )
                    })
                }
            </Flex>
        </Box>
    )
}

export default Index