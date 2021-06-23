const mung = require('express-mung');
const express = require('express');
const errorFile = require('./error_file');

const router = express.Router();

router.use(mung.json(
  (body) => {
    if (typeof body.code === 'number') {
      const code = Math.floor(body.code / 1000);
      return {
        ret_code: code === 1 ? -1 : 0,
        ret_msg: code === 1 ? 'Fail' : 'OK',

        ext_code: body.code,
        ext_info: Object.keys(errorFile).find((key) => errorFile[key] === body.code),
      };
    }

    const body2 = {
      ret_code: 0,
      ret_msg: 'OK',
      ext_code: '',
      ext_info: '',
      data: body,
    };
    return body2;
  },
));

module.exports = router;
