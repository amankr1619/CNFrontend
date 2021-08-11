import React from 'react'
import { Wrap, WrapItem, Container, Center } from "@chakra-ui/react"

const Wrapper = () => {
    return (
        <Container>
            <Wrap spacing="30px">
                <WrapItem>
                    <Center w="180px" h="80px" bg="red.200">
                    Box 1
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w="180px" h="80px" bg="green.200">
                    Box 2
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w="180px" h="80px" bg="tomato">
                    Box 3
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w="180px" h="80px" bg="blue.200">
                    Box 4
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w="180px" h="80px" bg="blackAlpha.500">
                    Box 5
                    </Center>
                </WrapItem>
            </Wrap>
            </Container>
    )
}

export default Wrapper
