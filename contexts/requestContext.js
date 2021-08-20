import React, {createContext} from 'react'
import { useBoolean } from "@chakra-ui/react"
export const requestContext = createContext();
const [proto, setProto] = useBoolean()

class RequestContextProvider extends Component {
   
    render() {
        return (
            <RequestContext proto = {proto} setProto = {setProto}>
                {props.children}
            </RequestContext>
        )
    }
} 
export default RequestContextProvider