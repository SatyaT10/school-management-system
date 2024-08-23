var express = require('express');
var router = express.Router();
const { newSchool,getAllSchools } = require('../Controllers/schooleControllers');
/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

router.post('/addSchool', newSchool);
router.get('/listSchools',getAllSchools)


module.exports = router;
