// mockjs
const Mock = require('mockjs')
var Random = Mock.Random
const imgColor = '#259cef'
const imgText = 'nubrace'
exports.aboutUs = Mock.mock({
  'page': 'aboutUs',
  'status': 1,
  'content': {
    'banner': Random.image('1930x330', imgColor, imgText),
    'company': {
      'status': 1,
      'title': '@ctitle',
      'subTitle': '@word',
      'content': '@cparagraph'
    },
    'product': {
      'status': 1,
      'title': '@ctitle',
      'subTitle': '@word',
      'content': '@cparagraph'
    },
    'process': {
      'status': 1,
      'title': '@ctitle',
      'subTitle': '@word',
      'content|4': [{
        'images': Random.image('450x250', imgColor, imgText),
        'title': '@ctitle',
        'text': '@cparagraph'
      }]
    },
    'brand': {
      'status': 1,
      'title': '@ctitle',
      'subTitle': '@word',
      'content|8': [
        Random.image('285x220', imgColor, imgText)
      ]
    },
    'team': {
      'status': 1,
      'title': '@ctitle',
      'subTitle': '@word',
      'content|4': [{
        'name': '@cname',
        'enName': '@name',
        'sImage' : Random.image('100x100', imgColor, imgText),
        'bImage' : Random.image('300x300', imgColor, imgText),
        'title|1-4': ['@province'],
        'speciality': {
          'title': '@ctitle',
          'text': '@csentence(6,15)'
        },
        'introduce': {
          'title': '@ctitle',
          'text': '@cparagraph'
        }
      }]
    },
    'about': {
      'status': 1,
      'title': '@ctitle',
      'subTitle': '@word',
      'content': {
        'name': '@csentence(5,10)',
        'site': {
          'title': '公司地址',
          'text': '@csentence(12)'
        },
        'phone': {
          'title': '公司电话',
          'text': '@now',
        },
        'fax': {
          'title': '公司传真',
          'text': '@now',
        },
        'email': {
          'title': '公司传真',
          'text': '@email',
        },
        'subImage': Random.image('655x400', imgColor, imgText)
      }
    }
  }
})

exports.checkUserName = Mock.mock({
  status: 1,
  result: true,
  info: '验证通过'
})

exports.sendCode = Mock.mock({
  status: 1,
  result: true,
  info: '验证码已发送，请注意查收',
  code: '666666'
})

exports.login = Mock.mock({
  status: 1,
  result: true,
  info: '登陆成功',
  token: '@guid'
})
