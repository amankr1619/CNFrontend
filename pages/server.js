import React, { useState, useEffect } from 'react';
import { Form, useField } from 'react-final-form'
import { serverRequest } from './api/server';
import Head from 'next/head'
import Layout from '../components/Layout'
import { clientRequest } from './api/client';
import { useToast } from "@chakra-ui/react"
import { ChatIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Center, Box, Heading, Flex, Text, Stack, Button, useColorModeValue, 
  Switch, useBoolean, FormLabel, Input, Badge, IconButton
} from "@chakra-ui/react"


const Server = () => {
  const [proto, setProto] = useBoolean()
  const [close, closeButton] = useBoolean()
  const toast = useToast()
  const closeRef = React.useRef();
  const [message] = useState([])
  const [response, setResponse] = useState([])
  useEffect(() => {
    closeRef.current = close; // <-- cache close value when it updates
  }, [close]);

  const onSubmit = async values => {
    if (close === true){
      closeButton.off()
    }
    do {
      let req;
      proto ? req = 'UDP' : req = 'TCP'
      const res = await serverRequest(req, JSON.stringify(values.message))
      if (res.messageFromClient === undefined) {
        toast({
          title: "Ohh no..., An error occured",
          description: "Make sure your server API is up and running",
          position: 'top',
          status: "error",
          isClosable: true,
        })
        break;
      }
      else if (res.messageFromClient === "ServerClose") {
        console.log("Server Closed")
      } else {
        message.push({connection: req, message: res.messageFromClient, address: (res.clientAddress[0] + ':' + res.clientAddress[1])}) 
        setResponse([...message])
      }
    } while(!closeRef.current)
  } 

  const onClose = async () => {
    if (close === true){
      closeButton.off()
    }
    let req;
    toast({
      title: "Server Closed",
      description: "Click Connect Server to restart the server again.",
      position: 'top',
      status: "info",
      isClosable: true,
    })
    proto ? req = 'UDP' : req = 'TCP'
    closeButton.toggle()
    await clientRequest(req, "ServerClose")      
  }
    

  const responseArray = response.map((d, i) => (
    <Box key = {i} borderWidth="1px" borderRadius="lg" overflow="hidden" my="2" mx="4" py="3" px ="4" >
      <Badge fontSize="14" colorScheme = {d.connection === 'TCP' ? 'green' : 'purple'}
        key = {`${i}-${d.connection}`}
      >{d.connection}
      </Badge>
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
      <Flex mt= {2}>
        <IconButton
          colorScheme = {d.connection === 'TCP' ? 'green' : 'purple'}
          aria-label="IP Address"
          icon={<ExternalLinkIcon />}
          size="sm"
          variant="outline"
        />
        <Text ml={2} fontSize={18} key = {`${i}-${d.address}`}>{d.address}</Text>
      </Flex>
    </Box>
  )
  );


  return (
    <Layout>
      <Head>
        <title>Server</title>
      </Head>
      
      <Flex>
        <Box  py={6} px={[2, 5, 12, 24]}>
          <Box w={'450px'} h={'800px'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'3xl'}
            border={'4px solid #e0e0e0'} rounded={'md'} overflow={'hidden'}
          >
            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading color={useColorModeValue('gray.700', 'white')} align={'center'}
                  pb={4} fontSize={'2xl'} fontFamily={'body'}
                >
                  Server
                </Heading>
                <Text color={'gray.500'} textAlign='justify'>
                  A server is either a program, a computer, or a device that is devoted to
                  managing network resources. Servers can either be on the same device or
                  computer or locally connected to other devices and computers or even remote.
                  There are various types of servers such as database servers, network servers, etc.
                </Text>
                <Text color={'gray.500'} textAlign='justify'>
                  Servers made with python commonly make use of methods like socket.socket(), socket.bind(),
                  etc. to establish a connection and bind to the clients.
                </Text>
                <Text color={'gray.500'} textAlign='justify'>
                  We are using REST api to create a server socket and await for the client to 
                  establish a connection and return a JSON variable containing address and message of the client.
                  The connect button requests the serverAPI with server message as params and awaits
                  for the client response. This goes on until close button is pressed.
                </Text>
              </Stack>
              <Form
                onSubmit={onSubmit}
                render={({
                    handleSubmit,
                    submitting,
                    pristine
                }) => (
                  <Box
                    as="form"
                    p={4}
                    borderWidth="1px"
                    rounded="lg"
                    shadow="1px 1px 3px rgba(0,0,0,0.3)"
                    onSubmit={handleSubmit}
                  >
                    <Flex justifyContent="center" my={5}>
                      <Text color={'gray.500'} p ="1">TCP</Text>
                        <Switch name="toppis" isDisabled={submitting} onChange={setProto.toggle}  colorScheme="teal" size="lg"  value="connection" />
                      <Text color={'gray.500'} p ="1">UDP</Text>             
                    </Flex>
                    <InputControl isDisabled={submitting} name="message" label="Greet Client:" />
                    <Button isLoading={submitting} isDisabled={submitting || pristine} loadingText="Listening to Requests"
                      type="submit" w={'full'} mt={4} bg={useColorModeValue('#48BB78', 'green.400')} color={'white'} rounded={'md'}
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                    >
                      Connect Server
                    </Button>
                    <Button onClick={onClose} isDisabled={pristine} w={'full'} mt={2} 
                      bg={useColorModeValue('#48BB78', 'red.400')} color={'white'} rounded={'md'}
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                    >
                      Close
                    </Button>
                  </Box>
                )}
              />
            </Box>
          </Box>
        </Box>

    {/* Display */}

        <Box py={6} px={[2, 5, 12, 24]}>
          <Box w={['400px', '500px', '600px', '800px']} h={'800px'} bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'3xl'} border={'solid #e0e0e0'} rounded={'md'} overflow={'hidden'}
          >
            <Box p={6}>
              <Center mb="2">
                <Heading fontSize={'2xl'}>Client Response</Heading>
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
    <Box>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        {...input}
        isInvalid={meta.error && meta.touched}
        id={name}
        placeholder="Hello Client"
      />
    </Box>
    )
  }

export default Server