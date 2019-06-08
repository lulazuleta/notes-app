const router = require('express').Router();

router.get('/users/sign_in', (req, res) => {
  res.render('users/sign_in');
});

router.get('/users/sign_up', (req, res) => {
  res.render('users/sign_up');
});

module.exports = router;