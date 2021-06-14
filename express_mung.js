const mung = require('express-mung');
const express = require('express');

const router = express.Router();

router.use(mung.json(
  (body) => {
    const body2 = {
      res: 'ok',
      data: body,
    };
    return body2;
  },
));

module.exports = router;
