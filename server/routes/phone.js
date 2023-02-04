'use strict';
const Phone = require('../data.json');
const express = require('express');
const router = new express.Router();

router.get('/', (req, res, next) => {
  res.json(Phone);
});

router.get('/:id', (req, res, next) => {
  res.json(Phone[parseInt(req.params.id)]);
});

module.exports = router;
