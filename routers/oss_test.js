const router = require('koa-router')();
const OSS = require('ali-oss');

async function ossCtrl(ctx) {
  put();
  let result = {
    code: 200
  };
  console.log('sucxx');
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body = result;
}

async function put () {
  let client = new OSS({
    region: 'oss-cn-shanghai',
    accessKeyId: 'LTAI2isreRFJInjn',
    accessKeySecret: 'yUPqK8G5sLCT82F0dxYAJ891CQ66rm',
    bucket: 'zhaoyang-test'
  });
  try {
    // object表示上传到OSS的Object名称，localfile表示本地文件或者文件路径
    let r1 = await client.put('object','test.psd'); 
    // console.log('put success: %j', r1);
    console.log('put success');
    let r2 = await client.get('object');
    console.log('get success: %j', r2);
    console.log('get success');
  } catch(e) {
    console.error('error: %j', err);
  }
}

router.get('/oss', ossCtrl);
router.post('/oss', ossCtrl);

module.exports = router;
