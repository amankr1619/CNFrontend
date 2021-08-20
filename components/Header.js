import React from 'react'
import { Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useColorMode, Button, Flex, Container, Text, Center, Image } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex bg="#ff5050">
            <Link href="https://iiitn.ac.in" isExternal>
                <Button
                    w="100px" h="65px"
                    mx={5} mt={3} mb={2}
                    bg="white"
                >

                    <Image
                        boxSize="60px"
                        objectFit="cover"
                        src="IIITN.png"
                        alt="IIITN"
                        mx={5} mt={2} mb={3}
                    />
                </Button>
            </Link>
            <Center w="100%" p={5}>
                <Text fontSize="3xl" fontWeight="bold">Indian Institute of Information Technology, Nagpur</Text>
            </Center>
            <Button onClick={toggleColorMode} w="60px" h="60px" mx={5} mt={3} mb={2} >
                {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Flex>
    )
}

export default Header
