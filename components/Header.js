import React from 'react';
import Link from 'next/link'
import {
  useColorMode, Button, Flex, Text, Center, Image, Stack
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex bg="purple.500">
      <Link href="https://iiitn.ac.in"><a>
        <Button
          w="100px"
          h="65px"
          mx={5}
          mt={3}
          mb={2}
          bg="transparent"
        >

          <Image
            boxSize="60px"
            objectFit="cover"
            src="IIITN.png"
            alt="IIITN"
            mx={5}
            mt={2}
            mb={3}
          />
        </Button>
        </a></Link>
      <Center w="100%" p={5}>
        <Text fontSize="3xl" fontWeight="bold">Indian Institute of Information Technology, Nagpur</Text>
      </Center>
      <Stack direction="row" spacing={4} align="center">
        <Link href="/" passHref><a target="_blank">
          <Button colorScheme="teal" variant="solid">
            Home
          </Button>
          </a></Link>
        <Link href="/client" passHref><a target="_blank">
          <Button colorScheme="teal" variant="solid">
            Client
          </Button>
        </a></Link>
        <Link href="/server" passHref><a target="_blank">
          <Button colorScheme="teal" variant="solid">
            Server
          </Button>
          </a></Link>
      </Stack>
      <Button onClick={toggleColorMode} w="60px" h="60px" mx={5} mt={3} mb={2} bg="transparent">
        {colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
};

export default Header;
