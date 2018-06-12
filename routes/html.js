const router = require('express').Router();
const controller = require('./../controllers/static-controller');

router.route('/')
    .get(controller.sendHtml)
    