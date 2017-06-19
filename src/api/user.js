import axios from '../utils/axios'
export function loginByEmail (email, password) {
  const data = {
    email,
    password
  }
  return axios({
    url: '/api/loginbyemail',
    method: 'post',
    data
  })
}

export function logout () {
  return axios({
    url: '/api/logout',
    method: 'post'
  })
}

export function getInfo (token) {
  return axios({
    url: '/api/info',
    method: 'post',
    params: {token}
  })
}

export function checkUserName (username) {
  return axios({
    url: '/api/checkUserName',
    method: 'post',
    params: {username: username}
  })
}

export function sendCode (phone) {
  return axios({
    url: '/api/sendCode',
    method: 'post',
    params: {phone}
  })
}

export function login (username, password) {
  const data = {
    username,
    password
  };
  return axios({
    url: '/api/login',
    method: 'post',
    data
  });
}
