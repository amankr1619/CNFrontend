import React, { useState } from 'react';
import { Formik } from 'formik';

import { 
    Heading,
    Box,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Switch
 } from "@chakra-ui/react"
 import { Form, useField } from 'react-final-form'
import { connectionRequest } from '../utils/handleAPI';

const onSubmit = async values => {
    let proto
    try{
        const data = JSON.stringify(values.toppis[0])
        
        if (JSON.stringify(values.toppis[0]) === undefined) {
          proto = true
        }
        else{
            proto = false
        }
    }
    catch {
        proto = true
    }
    const res = connectionRequest({proto})
    console.log(res)
}


const Card = () => {
    
    return (
        
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
                    submitting,
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
                        <Flex p = "5">
                                <Text color={'gray.500'} p ="1">TCP</Text>
                                <ConnectionControl name="toppis" value="UDP" />
                                <Text color={'gray.500'} p ="1">UDP</Text>
                            </Flex>
                        <Button
                            isLoading={submitting}
                            loadingText="Submitting"
                            type="submit"
                            w={'full'}
                            mt={1}
                            bg={useColorModeValue('#48BB78', 'green.400')}
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                    )}
                />
            </Box>
        </Box>
    )
}

const ConnectionControl = ({ name, value }) => {
    const {
      input: {  ...input }
    } = useField(name, {
      type: 'checkbox',
      value
  })
    return (
      <Switch {...input} colorScheme="teal" size="lg"  />
    )
  }

export default Card