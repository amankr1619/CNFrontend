import axios from 'axios';

export const serverRequest = async (proto, message) => {
  const params = {
    proto,
    message: message.replace(/"/g, ''),
  };
  try {
    const res = await axios.get('http://127.0.0.1:5000/', { params });
    return res.data;
  } catch (error) {
    return error;
  }
};
