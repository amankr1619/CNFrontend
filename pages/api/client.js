import axios from 'axios';

export const clientRequest = async (proto, message) => {
  const params = {
    proto,
    message: message.replace(/"/g, ''),
  };
  try {
    const res = await axios.get('http://127.0.0.1:4000/', { params });
    return { data: res.data, status: res.status };
  } catch (error) {
    return error;
  }
};
