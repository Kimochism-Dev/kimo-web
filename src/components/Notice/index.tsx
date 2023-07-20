import { Box, Flex, Text } from '@chakra-ui/react'

type IProps = {
    label: any,
    icon?: any,
}

const Index = ({ label, icon }: IProps) => {
    return (
        <Box
            width={'100%'}
            bg={'#d5bbff'}
            textAlign={'center'}
            fontSize={'14px'}
            p={2}
        >
            <Text>
                {label && label}
            </Text>
        </Box>
    )
}

export default Index