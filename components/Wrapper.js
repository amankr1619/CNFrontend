import React from 'react'
import { VStack, Wrap, WrapItem, Container, Center } from "@chakra-ui/react"

const Wrapper = () => {
    return (
        <Container>
            <VStack>
                <Container maxW="container.xl">Extra-Large Container</Container>
                <Container maxW="container.lg">Large Container</Container>
                <Container maxW="container.md">Medium Container</Container>
                <Container maxW="container.sm">Small Container</Container>
            </VStack>
        </Container>
    )
}

export default Wrapper
