
import axios from "axios"

export const connectionRequest = async ({proto}) => {
    console.log(proto)
    try {
      const res = await axios.get(`http://127.0.0.1:5000/${proto}`)
      console.log(res.data)
      console.log(`Client Address is ${res.data.clientAddress[0]}/${res.data.clientAddress[1]} and message from the client is ${res.data.messageFromClient}`)
      return res.data;

  } catch (error) {
      return error
  }
}