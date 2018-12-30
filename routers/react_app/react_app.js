const router = require('koa-router')();
const controller = require('../../controller/react_app/react_app')

router.get('/homeContentData', controller.getHomeContentData);
router.get('/peopleData', controller.getPeopleData);
router.get('/avatarData', controller.getAvatarData);

module.exports = router;