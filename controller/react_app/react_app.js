let courseImg1 = ('../../imgs/course1.png');
let courseImg2 = ('../../imgs/course2.png');
let courseImg3 = ('../../imgs/course3.png');
let bannerImg = ('../../imgs/home_banner.png');

// people
let people1 = ('../../imgs/people/people1.png');
let people2 = ('../../imgs/people/people2.png');
let people3 = ('../../imgs/people/people3.png');
let people4 = ('../../imgs/people/people4.png');
let people5 = ('../../imgs/people/people5.png');
let people6 = ('../../imgs/people/people6.png');

// avatar
let cardImg = ('../../imgs/avatar/card.png');

exports.getHomeContentData = async ctx => {
  let homeContentData = {
    bannerData: {
      title: '马甲线速成班',
      content: '想拥有好看的腹肌很重要的一点是皮脂要低，所以想要马甲线或者...',
      coach: 'Sutuny',
      durationTim: '330分44秒',
      img: bannerImg,
      joinNum: 42514,
      joinState: 1
    },
    list: [
      {
        title: '“巧克力” 肌肉训练',
        content: '想拥有好看的腹肌很重要的一点是皮脂要低，所以想要马甲线或者...',
        coach: '赵子兴',
        img: courseImg1,
        joinNum: 42514,
        joinState: 0
      },
      {
        title: '“巧克力” 肌肉训练',
        content: '想拥有好看的腹肌很重要的一点是皮脂要低，所以想要马甲线或者...',
        coach: '赵子兴',
        img: courseImg2,
        joinNum: 42514,
        joinState: 0
      },
      {
        title: '“巧克力” 肌肉训练',
        content: '想拥有好看的腹肌很重要的一点是皮脂要低，所以想要马甲线或者...',
        coach: '赵子兴',
        img: courseImg3,
        joinNum: 42514,
        joinState: 0
      },
      {
        title: '“巧克力” 肌肉训练',
        content: '想拥有好看的腹肌很重要的一点是皮脂要低，所以想要马甲线或者...',
        coach: '赵子兴',
        img: courseImg1,
        joinNum: 42514,
        joinState: 0
      }
    ]
  };
  ctx.body = {
      code: 200,
      data: homeContentData,
      message: 'hello'
  }
}

exports.getPeopleData = async ctx => {
  let peopleData = {
    list: [
      {
        title: '雨天和健身房',
        nickname: 'NAna',
        avatarImg: people1,
        likeNum: '2258'
      },
      {
        title: '雨天和健身房',
        nickname: 'NAna',
        avatarImg: people2,
        likeNum: '2258'
      },
      {
        title: '雨天和健身房',
        nickname: 'NAna',
        avatarImg: people3,
        likeNum: '2258'
      },
      {
        title: '雨天和健身房',
        nickname: 'NAna',
        avatarImg: people4,
        likeNum: '2258'
      },
      {
        title: '雨天和健身房',
        nickname: 'NAna',
        avatarImg: people5,
        likeNum: '2258'
      },
      {
        title: '雨天和健身房',
        nickname: 'NAna',
        avatarImg: people6,
        likeNum: '2258'
      }
    ]
  };
  ctx.body = {
      code: 200,
      data: peopleData,
      message: 'hello'
  }
}

exports.getAvatarData = async ctx => {
  let avatarData = {
    info: {
      cardImg: cardImg,
      avatar: '',
      nickname: 'test赵',
      summary: '简介',
      attentionNum: 1234,
      fansNum: 233
    },
    courseList: [
      {
        title: '“巧克力” 肌肉训练',
        content: '想拥有好看的腹肌很重要的一点是皮脂要低，所以想要马甲线或者...',
        coach: 'Sutuny',
        durationTim: '330分44秒',
        img: courseImg1,
        joinNum: 42514,
        joinState: 0
      }
    ]
  };
  ctx.body = {
      code: 200,
      data: avatarData,
      message: 'hello'
  }
}