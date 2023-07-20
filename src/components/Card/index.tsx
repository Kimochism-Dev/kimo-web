import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Text } from "@chakra-ui/react"

type IProps = {
    title: string,
    desc: string,
    price: number,
    image: string,
}

const Index = ({ title, desc, price, image }: IProps) => {
    return (
        <Card
            maxW='sm'
            minW={'sm'}
            borderRadius={'none'}
            border={'1px solid black'}
            cursor={'pointer'}
        >
            <CardBody>
                <Image
                    maxH={'sm'}
                    minH={'sm'}
                    width={'100%'}
                    src={`${image}`}
                    alt={`${title}`}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text>
                        {desc}
                    </Text>
                    <Text fontSize='2xl'>
                        R$ {price}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter
                bg={'black'}
                justifyContent={'flex-end'}
                display={'flex'}
            >
                <ButtonGroup spacing='2'>
                    <Button 
                        backgroundColor={'black'}
                        borderRadius={'none'}
                        variant='solid' 
                        color={'white'}
                    >
                        Comprar Agora
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default Index