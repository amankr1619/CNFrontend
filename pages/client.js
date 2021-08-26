import React, { useState } from 'react';
import Head from 'next/head';
import { Form, useField } from 'react-final-form';
import { ChatIcon } from '@chakra-ui/icons';
import {
  Heading, Flex, Box, Button, ButtonGroup, FormLabel, Input, Stack, Text, Switch,
  Badge, IconButton, useColorModeValue, Center, useBoolean, useToast,
} from '@chakra-ui/react';
import { clientRequest } from './api/client';
import Layout from '../components/Layout';


const Client = () => {
  const [proto, setProto] = useBoolean()
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  const toast = useToast()
  const [response, setResponse] = useState([])

  const onSubmit = async (values) => {
    await sleep(200)
    let req;
    proto ? req = 'UDP' : req = 'TCP'
    const clientData = await clientRequest(req, JSON.stringify(values.message))
    if (clientData.status == '200') {
        setResponse([...response, {
            message: clientData.data,
            connection: req
        }])
    }
    else {
      toast({
        title: "Ohh no.. An error occurred",
        description: "Make sure that the server is up and running, client API is connected, and both the client and the server are using the same connection protocol",
        position: 'top',
        timeout: 9000,
        status: "error",
        isClosable: true,
      })
    }
  }
    
  const responseArray = response.map((d, i) => 
    <Box key = {i} borderWidth="1px" borderRadius="lg" overflow="hidden" my="2" mx="4" py="3" px ="4" >
      <Badge fontSize="14" colorScheme = {d.connection === 'TCP' ? 'green' : 'purple'} key = {`${i}-${d.connection}`}>{d.connection}</Badge>
      <Flex mt= {2}>
        <IconButton
          colorScheme = {d.connection === 'TCP' ? 'green' : 'purple'}
          aria-label="Message"
          icon={<ChatIcon />}
          size="sm"
          variant="outline"
        />
        <Text ml={2} fontSize={18} key = {`${i}-${d.message}`}>{d.message}</Text>
      </Flex>
    </Box>
  );

  return (
    <Layout>
      <Head>
        <title>Client</title>
      </Head>
    
      <Flex>
        <Box py={6} px={[2, 5, 12, 24]}>
          <Box w={'450px'} h={'800px'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'3xl'}
            border={'4px solid #e0e0e0'} rounded={'md'} overflow={'hidden'}
          >
            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading color={useColorModeValue('gray.700', 'white')} align={'center'} pb={4}
                  fontSize={'2xl'} fontFamily={'body'}
                > 
                  Client 
                </Heading>
                <Text color={'gray.500'} textAlign='justify'>
                  A client is either a computer or software that receives information
                  or services from the server. In a client-server module, clients requests 
                  for services from servers. The best example is a web browser such as Google Chrome, Firefox, etc.
                  These web browsers request web servers for the required web pages and services 
                  as directed by the user. Other examples include online games, online chats, online marketplaces, etc.
                </Text>
                <Text color={'gray.500'} textAlign='justify'>
                  We are using REST API to create a client socket and connect to the server using the specified protocol
                  (TCP/UDP) that can be chosen fro the switch below. This website requests clientAPI with the client Message as body params and establishes 
                  connection to the server. It returns a JSON variable containing message from server.
                </Text>
              </Stack>
              <Form
                onSubmit={onSubmit}
                render={({
                handleSubmit,
                form,
                submitting,
                pristine
                }) => (
                  <Box as="form" p={4} borderWidth="1px" rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)" onSubmit={handleSubmit}>
                    <Flex justifyContent="center" my={5}>
                      <Text color={'gray.500'} p ="1">TCP</Text>
                        <Switch name="toppis" isDisabled={submitting} onChange={setProto.toggle}  colorScheme="teal" size="lg"  value="connection" />
                      <Text color={'gray.500'} p ="1">UDP</Text>             
                    </Flex>
                    <InputControl name="message" label="Send Message:" />
                    <Flex justifyContent="center" my={5}>                   
                      <ButtonGroup spacing={4}>
                        <Button variant="outline" isDisabled={submitting || pristine} type="submit"
                            w={36} mt={1} bg={useColorModeValue('#48BB78', 'green.400')} color={'white'}
                            rounded={'md'}
                            _hover={{
                              transform: 'translateY(-2px)',
                              boxShadow: 'lg'
                            }}
                        >
                          Submit
                        </Button>
                        <Button
                          variant="outline" onClick={form.reset} isDisabled={submitting || pristine}
                          w={36} mt={1} bg={useColorModeValue('#48BB78', 'red.400')} color={'white'}
                          rounded={'md'}
                          _hover={{
                          transform: 'translateY(-2px)',
                          boxShadow: 'lg',
                          }}
                        >
                          Reset
                      </Button>
                    </ButtonGroup>
                  </Flex>
                </Box>
                )}
              /></Box>
            </Box>
          </Box>

            {/* Display */}   
          <Box py={6} px={[2, 5, 12, 24]}>
            <Box w={['400px', '500px', '600px', '800px']} h={'800px'}
              bg={useColorModeValue('white', 'gray.800')} boxShadow={'3xl'}
              border={'solid #e0e0e0'} rounded={'md'} overflow={'hidden'}
            >
              <Box p={6}>
                <Center mb="2">
                  <Heading fontSize={'2xl'}>Server Response</Heading>
                </Center>
                <Box h="705px" overflowY="scroll" sx={{
                  '&::-webkit-scrollbar': {
                  width: '8px',
                  borderRadius: '8px',
                  backgroundColor: `gray.700`,
                  },
                  '&::-webkit-scrollbar-thumb': {
                  backgroundColor: `gray.500`,
                  borderRadius: '8px',
                  },
                }}>
                  <Flex direction="column-reverse" align="vertical">
                      {responseArray}
                  </Flex>
                </Box>     
              </Box>
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

const InputControl = ({ name, label }) => {
    const { input, meta } = useField(name)
    return (
        <>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Input
          {...input}
          isInvalid={meta.error && meta.touched}
          id={name}
          placeholder="Hello Server"
        />
        </>
    )
  }

export default Client