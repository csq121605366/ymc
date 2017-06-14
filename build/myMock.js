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
  res.json({
    status: 0,
    data: appData.aboutUs
  })
})

module.exports.apiRouter = apiRouter
