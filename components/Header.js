import React from 'react'
import { useColorMode, Button, Flex } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex>
            <Button onClick={toggleColorMode}>{colorMode === "dark" ? <MoonIcon /> : <SunIcon />}</Button>
        </Flex>
    )
}

export default Header
