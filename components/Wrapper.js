import React from 'react'
import Card from './Card'
// import FormT from './form'
import { Container,
    Wrap,
    Heading,
    Box,

    Flex,

    Button,
    useColorModeValue,
    Switch,
 } from "@chakra-ui/react"

const Wrapper = () => {
    return (
        <Flex>
    <Box py={6} px={[2, 5, 12, 24]}>
        <Card />
        {/* <FormT /> */}
    </Box>
    <Box py={6} px={[2, 5, 12, 24]}>
    <Box
            w={'1200px'}
            h={'700px'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'3xl'}
            border={'solid #e0e0e0'}
            rounded={'md'}
            overflow={'hidden'}
        >
            <Box p={6}>
                <Heading fontSize={'lg'}>Connection Mode: TCP</Heading>
            </Box>
        </Box>
    </Box>
        </Flex>

    )
}

export default Wrapper
