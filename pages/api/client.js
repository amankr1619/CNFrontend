import axios from "axios"

export const clientRequest = async (proto, message) => {
      while (true) {
      const options = {
        headers: {'X-Custom-Header': 'value'}
      };
      const data = {
        proto: proto,
        message: message
      }
      try {
          console.log(message)
        const res = await axios.get(`http://127.0.0.1:4000/?proto=${proto}&message=${message}`)
        console.log(res)
        console.log(`Message from server: ${res.data}`)
        return res.data;

    } catch (error) {
        return error
    }
  }
}