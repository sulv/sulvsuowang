'use strict'

let express = require('express');
let app = express();
const config = require('../config/config');

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(() => {
  console.log(`⚡️⚡️ the 999 plan start at: ${config.port}`);
})
