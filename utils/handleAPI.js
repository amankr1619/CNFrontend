
import axios from "axios"

export const connectionRequest = async ({proto}) => {
  console.log(proto)
  try {
    axios.get('http://127.0.0.1:5000/TCP',
    {
      headers: {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5000',
        'Content-Type': 'application/json',
      },
    }).then((response) => {
        console.log(`Client Address is ${response.data.clientAddress} and message from the client is ${response.data.messageFromClient}`);
      }, (error) => {
        console.log(error);
      });
} catch (error) {
return error

}
}