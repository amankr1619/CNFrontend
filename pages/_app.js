import { ChakraProvider } from "@chakra-ui/react"
import { useBoolean } from "@chakra-ui/react"
function MyApp({ Component, pageProps }) {
  const [proto, setProto] = useBoolean()
  console.log (`Parent proto: ${proto}`)
  return (
    <ChakraProvider>
      <Component {...pageProps}  proto = {proto} setProto = {setProto} />
    </ChakraProvider>
  )
}

export default MyApp