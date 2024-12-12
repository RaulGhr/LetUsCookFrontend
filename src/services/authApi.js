import axios from 'axios';
import { withLogs, baseUrl, config, authConfig } from '../utils/api.utils';

export const register = async (username, email, password) => {
  
    const payload = {
      "username": username,
      "email": email,
      "password": password
    }
  
    const response = await axios.post(`${baseUrl}/users/register`, payload).then(response => {
      // console.log(response);
      return response;
    }).catch(error => {
      console.log(error.response);
      return error.response;
    });
  
    var token = response.data.access_token;
    let code = response.status;
  
    if (code == 201) {
      return { success: true, "token": token };
    }
    return { success: false, error: 'Something went wrong' };

  
};

export const login = async (email, password) => {

  const payload = {
    "email": email,
    "password": password
  }

  const response = await axios.post(`${baseUrl}/users/login`, payload).then(response => {
    console.log(response);
    return response;
  }).catch(error => {
    console.log(error.response);
    return error.response;
  });

  var token = response.data.access_token;
  let code = response.status;

  if (code == 200) {
    return { success: true, "token": token };
  }
  return { success: false, error: 'Invalid email or password' };
};

export const logout = async () => {
  // mockUserData = null;
  return { success: true };
};

export const getCurrentUser = async (token) => {

  const config = authConfig(token);

  const response = await axios.get(`${baseUrl}/users/profile`, config).then(response => {
    return response;
  }).catch(error => {
    console.log(error.response);
    return error.response;
  });

  const code = response.status;
  if (code == 200) {
    return response.data;
  }
  else {
    return null;
  }
};
