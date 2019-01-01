exports.getHomeNavData = async ctx => {
  let homeNavData = {
    list: [
      {
        code: 'a',
        name: '推荐'
      },
      {
        code: 'b',
        name: '展览'
      },
      {
        code: 'c',
        name: '演唱会'
      },
      {
        code: 'd',
        name: '活动'
      },
      {
        code: 'e',
        name: 'DIY'
      },
      {
        code: 'f',
        name: '景点门票'
      }
    ]
  }
  ctx.set('Access-Control-Allow-Origin','*');
  ctx.body = {
      code: 200,
      data: homeNavData,
      message: 'hello'
  }
};

exports.getHomeActivityDate = async ctx => {
  let homeActivityDate = {
    list: [
      {
        title: 'WOOY艺术展',
        summary: '上海浦东区mall广场',
        statDate: '10.16-10.26',
        statCost: '免费'
      },
      {
        title: 'WOOY艺术展',
        summary: '上海浦东区mall广场',
        statDate: '10.16-10.26',
        statCost: '免费'
      },
      {
        title: 'WOOY艺术展',
        summary: '上海浦东区mall广场',
        statDate: '10.16-10.26',
        statCost: '免费'
      },
      {
        title: 'WOOY艺术展',
        summary: '上海浦东区mall广场',
        statDate: '10.16-10.26',
        statCost: '免费'
      },
      {
        title: 'WOOY艺术展',
        summary: '上海浦东区mall广场',
        statDate: '10.16-10.26',
        statCost: '免费'
      }
    ]
  };
  ctx.set('Access-Control-Allow-Origin','*');
  ctx.body = {
      code: 200,
      data: homeActivityDate,
      message: 'hello'
  }
}

exports.getMyInfoData = async ctx => {
  let myInfoData = {
    data: {
      nickname: '瞌睡',
      city: '江苏',
      gender: '男',
      summary: '素食主义者',
      watchNum: 123,
      fansNum: 566,
    }
  };
  ctx.set('Access-Control-Allow-Origin','*');
  ctx.body = {
      code: 200,
      data: myInfoData,
      message: 'hello'
  }
}