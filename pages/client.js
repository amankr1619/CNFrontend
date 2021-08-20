import React, { useState } from 'react';
import { Form, useField } from 'react-final-form'
import { clientRequest } from './api/client';
import Head from 'next/head'
import Layout from '../components/Layout'

import {
    Heading,
    Flex,
    useColorModeValue,
    Box,
    Button,
    ButtonGroup,
    FormLabel,
    Input,
    Stack,
    Text,
 } from "@chakra-ui/react"


const Client = ({proto, setProto}) => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    const [response, setResponse] = useState({})
    console.log(proto)
    const onSubmit = async values => {
        await sleep(300)
        const clientData = await clientRequest('TCP', JSON.stringify(values.message))
        const message = {
            connection: 'TCP', 
            message: clientData
        }
        setResponse(message)
        console.log(values.message)
    }
    


    return (
        <Layout>
             <Head>
                <title>Client</title>
            </Head>
      
            <Flex>
                <Box py={6} px={[2, 5, 12, 24]}>
                    <Box
                        maxW={'370px'}
                        w={'370px'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'3xl'}
                        border={'4px solid #e0e0e0'}
                        rounded={'md'}
                        overflow={'hidden'}
                    >

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
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                    et ea rebum.

                                </Text>
                            </Stack>
                            <Form
                                onSubmit={onSubmit}
                                render={({
                                handleSubmit,
                                form,
                                submitting,
                                pristine,
                                values
                                }) => (
                                <Box
                                    as="form"
                                    p={4}
                                    borderWidth="1px"
                                    rounded="lg"
                                    shadow="1px 1px 3px rgba(0,0,0,0.3)"
                                    onSubmit={handleSubmit}
                                >
                                    <InputControl name="message" label="Send Message" />
                                    <ButtonGroup spacing={4}>
                                        <Button
                                            variant="outline"
                                            isDisabled={submitting || pristine}
                                            isLoading={submitting}
                                            loadingText="Listening to Requests"
                                            type="submit"
                                            w={'full'}
                                            mt={1}
                                            bg={useColorModeValue('#48BB78', 'green.400')}
                                            color={'white'}
                                            rounded={'md'}
                                            _hover={{
                                            transform: 'translateY(-2px)',
                                            boxShadow: 'lg'
                                            }}
                                        >
                                            Submit
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={form.reset}
                                            isDisabled={submitting || pristine}
                                            w={'full'}
                                            mt={1}
                                            bg={useColorModeValue('#48BB78', 'red.400')}
                                            color={'white'}
                                            rounded={'md'}
                                            _hover={{
                                            transform: 'translateY(-2px)',
                                            boxShadow: 'lg',
                                            }}
                                        >
                                            Reset
                                        </Button>
                                    </ButtonGroup>
                                </Box>
                                )}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Display */}

                <Box py={6} px={[2, 5, 12, 24]}>
                    <Box
                        w={'400px'}
                        h={'300px'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'3xl'}
                        border={'solid #e0e0e0'}
                        rounded={'md'}
                        overflow={'hidden'}
                    >
                        <Box p={6}>
                            <Heading fontSize={'lg'}>Connection Mode: {proto ? 'UDP' : 'TCP'}</Heading>
                            {JSON.stringify(response.message)}
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