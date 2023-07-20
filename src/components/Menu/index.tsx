import { KimoLogoNameBlack } from '@/assets/logos'
import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { Notice } from '..'


const Index = () => {
    return (
        <Box
            m={0}
            width={'100%'}
        >
            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                p={4}
            >
                <Image src={KimoLogoNameBlack} width={200} alt="Logo" />
                {/* <Text
                    textTransform={'uppercase'}
                    letterSpacing={'8px'}
                    fontWeight={'bolder'}
                    fontSize={'24px'}
                    fontFamily={'Raleway, sans-serif'}
                >
                    Kimo
                </Text> */}
            </Flex>
            <Notice label={`Free shipping On all STICKER orders over $30 (USA ONLY)`}/>
        </Box>
    )
}

export default Index