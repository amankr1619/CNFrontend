import React from 'react'
import { Container,
    Wrap,
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Switch,
 } from "@chakra-ui/react"

const Wrapper = () => {
    return (
        <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'3xl'}
        border={'4px solid #e0e0e0'}
        rounded={'md'}
        overflow={'hidden'}>
  

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>

            <Heading
                color={useColorModeValue('gray.700', 'white')}
                align={'center'}
                pb={4}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Server 1
          </Heading>
          <Text color={'gray.500'} textAlign='justify'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
            <Flex p = "5">
                <Text color={'gray.500'} p ="1">TCP</Text>
                <Switch colorScheme="teal" size="lg" />
                <Text color={'gray.500'} p ="1">UDP</Text>
            </Flex>
            
          </Stack>
          <Button
            w={'full'}
            mt={1}
            bg={useColorModeValue('#48BB78', 'green.400')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Connect
          </Button>
        </Box>
      </Box>
    </Center>
    )
}

export default Wrapper
