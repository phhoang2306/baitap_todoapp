const express = require('express');
const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    res.send('TODO APP BACKEND API')
  })

module.exports = router;