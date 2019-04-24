const router = require('koa-router')();

async function hookCtrl(ctx) {
  let result = {
    code: 200
  };
  console.log('suc');
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body = result;
}



router.get('/githook', hookCtrl);
router.post('/githook', hookCtrl);

module.exports = router;
