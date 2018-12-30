const router = require('koa-router')();
const controller = require('../../controller/test-cloud/test-cloud')

router.get('/storeDetailData', controller.getStoreDetailData);
router.get('/personData', controller.getPersonData);
router.get('/personInfo', controller.getPersonInfo);

module.exports = router;