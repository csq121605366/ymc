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
    method: 'get',
    params: {token}
  })
}

export function checkUserName (username) {
  return axios({
    url: '/api/checkUserName',
    method: 'get',
    params: {username: username}
  })
}

export function sendCode (phone) {
  return axios({
    url: '/api/sendCode',
    method: 'get',
    params: {phone}
  })
}


