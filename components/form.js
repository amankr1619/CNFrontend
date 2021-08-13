// /* eslint-disable jsx-a11y/accessible-emoji */
// import React from 'react'
// import {
//   Box,
//   Button,
//   FormLabel,
//   Stack,
//   Switch
// } from "@chakra-ui/react"
// import { Form, useField } from 'react-final-form'

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// const onSubmit = async values => {
//   await sleep(300)
//   window.alert(JSON.stringify(values, 0, 2))
// }

// const FormT = () => (
    
//       <Form
//         onSubmit={onSubmit}
//         render={({
//           handleSubmit,
//           submitting,
//           values
//         }) => (
//           <Box
//             as="form"
//             p={4}
//             borderWidth="1px"
//             rounded="lg"
//             shadow="1px 1px 3px rgba(0,0,0,0.3)"
//             onSubmit={handleSubmit}
//           >
//               <FormLabel htmlFor="toppi">Toppings</FormLabel>
//               <Stack pl={6} mt={1} spacing={1}>
//                 <ConnectionControl name="toppis" value="UDP" />
//               </Stack>
//               <Button
//                 isLoading={submitting}
//                 loadingText="Submitting"
//                 variantColor="teal"
//                 type="submit"
//               >
//                 Submit
//               </Button>
           
//             <Box as="pre" my={10}>
//               {JSON.stringify(values, 0, 2)}
//             </Box>
//           </Box>
//         )}
//       />
// )
// const ConnectionControl = ({ name, value }) => {
//   const {
//     input: {  ...input }
//   } = useField(name, {
//     type: 'checkbox',
//     value
// })
// console.log(input.checked)
//   return (
//     <Switch {...input} size="lg" checked={flag}  />
//   )
// }

// export default FormT
