import { Box, Flex, Button, Text, Input } from '@chakra-ui/react'
import { IoIosArrowForward } from 'react-icons/io'

const Index = () => {
    return (
        <Box>
            <Flex
                bg={'#f9f9f9'}
                flexDir={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                textAlign={'center'}
                minH={'360px'}
                px={'40px'}
                py={{base: '0', sm: '20', md: '20', lg: '0px' }}
            >
                <Text
                    textTransform={'uppercase'}
                    fontWeight={'bold'}
                    fontSize={'24px'}
                    py={2}
                >
                    FIQUE POR DENTRO DAS NOSSAS NOVIDADES
                </Text>
                <Text
                    width={{base: '340px', sm: '340px', md: '600px', lg: '1000px' }}
                >
                    Se inscreva para ganhar ofertas especiais, cupoms de desconto, e promoções exclusivas por tempo limitado
                </Text>
                <Box
                    as="form"
                >
                    <Flex
                        flexDir={'row'}
                        py={4}
                    >
                        <Input 
                            width={{base: '300px', sm: '300px', md: '300px', lg: '300px' }}
                            borderRadius={'none'}
                            type="email"
                            placeholder="example@kimo.store.com"
                            required
                        />
                        <Button 
                            bg={'black'}
                            borderRadius={'none'}
                            type="submit"
                        >
                            <IoIosArrowForward color={'white'} />
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default Index