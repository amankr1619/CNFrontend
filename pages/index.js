import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

import {
  Box,
  Heading,
  Flex,
  Text,
  Link,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react"


export default function Home() {
  
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Flex>
        <Box
          py={20}
          px={10}
        //px={[2, 5, 12, 24]}
        >
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'3xl'}
            borderWidth="1px"
            rounded="lg"
            overflow={'hidden'}
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
          >
            <Box
              p={7}
              bg={useColorModeValue('gray.800', 'white')}
            >
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading
                  color={useColorModeValue('white', 'gray.800')}//bg colour of heading
                  align={'center'}
                  pb={4}
                  fontSize={'4xl'}
                  fontFamily={'body'}>
                  Group Members
                </Heading>
                <Box
                  px={7}
                  py={2}
                  bg={useColorModeValue('white', 'gray.800')}//bg colour of names
                  borderWidth="1px"
                  rounded="lg"
                  shadow="1px 1px 3px rgba(0,0,0,0.3)"
                  textColor="grey.700"
                >
                  <Text fontSize='24' color={'black.500'} >
                    BT19CSE127 - Aman Kumar
                  </Text>
                  <Text fontSize='24' color={'black.500'} >
                    BT19CSE121 - Aniket Ransing
                  </Text>
                  <Text fontSize='24' color={'black.500'} >
                    BT19CSE018 - Bhunesh Mera
                  </Text>
                  <Text fontSize='24' color={'black.500'} >
                    BT19CSE070 - Bhushan Bhamare
                  </Text>
                  <Text fontSize='24' color={'black.500'} >
                    BT19CSE128 - Gaurav Bhandarakar
                  </Text>
                  <Text fontSize='24' color={'black.500'} >
                    BT19CSE104 - Suraj Khedkar
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box
          py={20}
          px={10}
          maxWidth={500}
        >
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'3xl'}
            borderWidth="1px"
            rounded="lg"
            overflow={'hidden'}
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
          >
            <Box
              p={7}
              bg={useColorModeValue('white', 'gray.800')}
            >
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading
                  color={useColorModeValue('gray.800', 'white')}//bg colour of heading
                  align={'center'}
                  pb={4}
                  fontSize={'4xl'}
                  fontFamily={'body'}>
                  Socket Programming
                </Heading>
                <Box
                  px={7}
                  py={2}
                  bg={useColorModeValue('gray.800', 'white')}//bg colour of names
                  borderWidth="1px"
                  rounded="lg"
                  shadow="1px 1px 3px rgba(0,0,0,0.3)"
                  textColor="grey.700"
                >
                  <Text fontSize='18' color={useColorModeValue('white', 'gray.800')} textAlign='center' >
                    A network socket is a software structure within a network node of a computer network that
                    serves as an endpoint for sending and receiving data across the network. We Implemented API and Frontend using React.js .
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box
          py={20}
          px={10}
          minWidth={500}
          minHeight={500}
        >
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'3xl'}
            borderWidth="1px"
            rounded="lg"
            overflow={'hidden'}
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
          >
            <Box
              p={10}
              bg={useColorModeValue('gray.800', 'white')}
            >
              <Heading
                color={useColorModeValue('white', 'gray.800')}//bg colour of heading
                align={'center'}
                pb={4}
                fontSize={'4xl'}
                fontFamily={'body'}>
                Get Stared!
              </Heading>
              <Stack paddingTop="5" spacing={5} align={'center'} mb={5}>
                <Link href="/server" isExternal>
                  <Button height="90px" width="200px"
                    fontSize="4xl" fontFamily="arial"
                    variant="ghost" bg="#00FF88" border="2px"
                    textColor={useColorModeValue('black', 'gray.800')}
                  >
                    Server
                  </Button>
                </Link>
                <Link href="/client" isExternal>
                  <Button height="90px" width="200px"
                    fontSize="4xl" fontFamily="arial"
                    variant="ghost" bg="#ff007f" border="2px"
                    textColor={useColorModeValue('black', 'gray.800')}
                  >
                    Client
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Layout >
  )
}
