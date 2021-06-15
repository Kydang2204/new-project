const mung = require('express-mung');
const express = require('express');
const errorFile = require('./error_file');

const router = express.Router();

router.use(mung.json(
  (body) => {
    if (typeof body === 'number') {
      return { msg: Object.keys(errorFile).find((key) => (errorFile[key] === body)) };
    }

    const body2 = {
      res: 'ok',
      data: body,
    };
    return body2;
  },
));

module.exports = router;
