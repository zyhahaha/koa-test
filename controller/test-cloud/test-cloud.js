exports.getStoreDetailData = async ctx => {
  let storeDetailData = {
    data: {
      notice: '店铺公告msg msg',
      phone: '18312341234',
      address: '上海市',
      businessHours: '18:00 - 19:00',
      intro: '商户信息tes tetst'
    }
  };
  ctx.set('Access-Control-Allow-Origin','*');
  ctx.body = {
      code: 200,
      data: storeDetailData,
      message: 'hello'
  }
}

exports.getPersonData = async ctx => {
  let personData = {
    data: {
      avatar: './assets/person_center/default_head.png',
      username: '游客',
      phone: '未绑定',
      orderNum: '99',
      serviceLog: '22',
      collectNum: '2'
    }
  };
  ctx.set('Access-Control-Allow-Origin','*');
  ctx.body = {
      code: 200,
      data: personData,
      message: 'hello'
  }
}

exports.getPersonInfo = async ctx => {
  let personInfo = {
    data: {
      avatar: './assets/person_center/default_head.png',
      username: '游客',
      gender: 1,
      phone: '未绑定',
    }
  };
  ctx.set('Access-Control-Allow-Origin','*');
  ctx.body = {
      code: 200,
      data: personInfo,
      message: 'hello'
  }
}