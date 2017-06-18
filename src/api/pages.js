
// 页面获取内容api

import axios from '../utils/axios';

export function getAboutUs() {
  return axios({
    url: '/api/aboutUs',
    method: 'get'
  });
}



