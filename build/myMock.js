/**
 * Created by csq on 2017/6/13.
 */

// express服务器
var express = require('express')

// 定义自己模拟的数据
var appData = require('../data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings
// mockjs
const Mock = require('mockjs')

// 创建路由路径的链式路由句柄
const apiRouter = express.Router()

apiRouter.all('/seller', function (req, res) {
  res.json({
    errno: 0,
    data: seller
  })
})
apiRouter.all('/goods', function (req, res) {
  res.json({
    errno: 0,
    data: goods
  })
})
apiRouter.all('/ratings', function (req, res) {
  res.json({
    errno: 0,
    data: ratings
  })
})
apiRouter.all('/random', function (req, res) {
  const data = Mock.mock({
    'array|3-10': [{
      'title': '我是模拟数据',
      'email': '@email',
      'uid': '@guid',
      'ip': '@ip',
      'url': '@url',
      'domain': '@domain',
      'firstName': '@cfirst',
      'lastName': '@clast'
    }]
  })
  res.json({
    errno: 0,
    data: data
  })
})

module.exports.apiRouter = apiRouter
