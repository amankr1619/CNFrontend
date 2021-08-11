import React from 'react'
import { useColorMode, Button, Flex, Container, Text,Box, Image } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex>
            <Image
                boxSize="60px"
                objectFit="cover"
                src="IIITN.png"
                alt="IIITN"
                mx={5} mt={3} mb={2}            
            />
            <Box w="100%" p={5}>
                <Text fontSize="3xl">Indian Institute of Information Technology, Nagpur</Text>
            </Box>
            <Button onClick={toggleColorMode} w="60px" h="60px" mx={5} mt={3} mb={2} >
                {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Flex>
    )
}

export default Header
