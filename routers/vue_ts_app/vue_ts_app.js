const router = require('koa-router')();
const controller = require('../../controller/vue_ts_app/vue_ts_app')

router.get('/homeNavData', controller.getHomeNavData);
router.get('/homeActivityDate', controller.getHomeActivityDate);
router.get('/myInfoData', controller.getMyInfoData);

module.exports = router;