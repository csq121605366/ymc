
// 页面获取内容api

import fetch from '../utils/fetch';

export function getAboutUs() {
  return fetch({
    url: '/api/aboutUs',
    method: 'get'
  });
}



