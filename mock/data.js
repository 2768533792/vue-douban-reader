let Mock = require('mockjs')
let Random = Mock.Random

module.exports = function () {
  var data = {
    books: [],
    accounts: [],
    category: {
      fiction: ['悬疑小说', '言情女性小说', '科幻幻想小说', '文艺小说', '青春小说', '都市小说', '武侠小说', '历史小说', '故乡小说', '职业故事'],
      notFiction: ['文艺散文', '评论随笔', '文化', '历史纪实', '情感成长', '旅行游记', '生活风尚', '科技科普', '行业', '摄影', '漫画绘本', '设计艺术', '诗歌', '剧本']
    },
    saleRankBooks: [
      {
        title: '两个人的晚餐',
        author: '叶眉',
        type: 'fiction'
      },
      {
        title: '关东只怪',
        author: '张半天',
        type: 'fiction'
      },
      {
        title: '春日便当',
        author: '[日]吉井忍',
        type: 'notFiction'
      },
      {
        title: '少女瘫痪笔记',
        author: '叁贰肆',
        type: 'notFiction'
      },
      {
        title: '穿越大洋遇见你',
        author: '南星',
        type: 'notFiction'
      },
      {
        title: '不速之客',
        author: '三七',
        type: 'fiction'
      },
      {
        title: '向爱而生',
        author: '拾贰',
        type: 'fiction'
      }
    ],
    readerTrends: [
      {
        reader: 'yuzhou',
        trend: '40分钟前购买',
        bookName: '猎手猎物',
        avatar: ''
      },
      {
        reader: '吴振华',
        trend: '40分钟前购买',
        bookName: '历史红颜',
        avatar: ''
      },
      {
        reader: '石桥',
        trend: '40分钟前购买',
        bookName: '文案万万岁',
        avatar: ''
      },
      {
        reader: '秦鲁娜',
        trend: '40分钟前购买',
        bookName: '无非，你是我',
        avatar: ''
      }
    ]
  }
  var images = [1, 2, 3].map(x => Random.image('200X100', Random.color(), Random.word(2, 6)))
  for (let i = 0; i < 30; i++) {
    let content = Random.cparagraph(0, 10)
    data.books.push({
      id: i,
      title: Random.cword(8, 20),
      desc: content.substr(0, 40),
      tag: Random.cword(2, 6),
      views: Random.integer(100, 1000),
      images: images.slice(0, Random.integer(1, 3))
    })
  }
  for (let i = 0; i < 20; i++) {
    let username = Random.string('lower', 10)
    let password = Random.string('number', 6)
    let nickname = Random.cword(3, 6)
    data.accounts.push({
      id: i,
      username: username,
      nickname: nickname,
      password: password
    })
  }
  for (let i = 0; i < data.readerTrends.length; i++) {
    data.readerTrends[i].avatar = Random.image('48X48', Random.color(), Random.word(2, 6))
  }
  return data
}
