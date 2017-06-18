/**
 * Created by csq on 2017/6/13.
 */

// express服务器
var express = require('express')


// 定义自己模拟的数据
var appData = require('./data')


// 创建路由路径的链式路由句柄
const apiRouter = express.Router()



apiRouter.all('/aboutUs', function (req, res) {
  res.json(appData.aboutUs)
})

apiRouter.all('/checkUserName', function (req, res) {
  res.json(appData.checkUserName)
})
apiRouter.all('/sendCode', function (req, res) {
  res.json(appData.sendCode)
})
module.exports.apiRouter = apiRouter
