/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { render } from 'react-dom'
import {
  Box,
  Button,
  ButtonGroup,
  ThemeProvider,
  theme,
  FormLabel,
  Input,
  Flex,
  Stack,
  useColorModeValue,
  Heading,
  Text,
} from '@chakra-ui/react'
import { Form, useField } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const Textr = () => (
  <ThemeProvider theme={theme}>
    <Box w={500} p={4} m="20px auto">
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
            <Box as="pre" my={10}>
              {JSON.stringify(values, 0, 2)}
            </Box>
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
                        <Heading fontSize={'lg'}>Connection Mode:  Close Button:</Heading>
                        {/* {message} */}
                    </Box>
                </Box>
            </Box>
        </Flex>
    </Box>
  </ThemeProvider>
)

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


export default Textr
