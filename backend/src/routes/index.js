const express = require('express');
const router = express.Router();
const baseRoute = require('./baseRouter')
const taskRoute = require('./taskRouter')
const defaultRoutes = [
  {
    path: '/',
    route: baseRoute,
  },
  {
    path: '/task',
    route: taskRoute,
  },,
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
