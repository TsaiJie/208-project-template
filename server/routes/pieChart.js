const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const data = [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' },
  ];
  res.send(data);
});

module.exports = router;
