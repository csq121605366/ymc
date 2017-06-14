// mockjs
const Mock = require('mockjs')
var Random = Mock.Random
const imgColor = '#259cef'
const imgText = 'nubrace'
exports.aboutUs = Mock.mock({
  'page': 'aboutUs',
  'content': {
    'banner': Random.image('1930x330', imgColor, imgText),
    'company': {
      'title': '@ctitle',
      'subTitle': '@word',
      'context': '@cparagraph'
    },
    'product': {
      'title': '@ctitle',
      'subTitle': '@word',
      'context': '@cparagraph'
    },
    'process': {
      'title': '@ctitle',
      'subTitle': '@word',
      'context|4': [{
        'images': Random.image('450x250', imgColor, imgText),
        'title': '@ctitle',
        'text': '@cparagraph'
      }]
    },
    'brand': {
      'title': '@ctitle',
      'subTitle': '@word',
      'context|8': [
        Random.image('285x220', imgColor, imgText)
      ]
    },
    'team': {
      'title': '@ctitle',
      'subTitle': '@word',
      'context': {
        'array|4': {
          'name': '@cname',
          'enName': '@name',
          'title': {
            'array|1-4': ['@province']
          },
          'speciality': {
            'title': '@ctitle',
            'text': '@csentence(6,15)'
          },
          'introduce': {
            'title': '@ctitle',
            'text': '@cparagraph'
          }
        }
      }
    },
    'about': {
      'title': '@ctitle',
      'subTitle': '@word',
      'context': {
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
