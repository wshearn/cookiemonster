var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/hey.jpg', function(req, res, next) {
  console.log(req.cookies);
  console.log(req.signedCookies);
  var img = fs.readFileSync('./images/1234.jpg');
  res.cookie("openshift-session-token", "derp", { "domain": ".devshift.org", "path": "/api/" });
  res.writeHead(200, {'Content-Type': 'image/jpg'});
  res.end(img, 'binary');  
});

module.exports = router;
