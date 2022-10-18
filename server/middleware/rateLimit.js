const rateLimit = require('express-rate-limit');

//Limit the access to the signup functionnality if there are more than 5 requests in one hour
exports.signupLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: {
    message: 'Trop de tentative, veuillez réessayer plus tard',
  },
  legacyHeaders: false,
});

//Limit the access to the login functionnality if there are more than 5 requests in 10 minutes
exports.loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: {
    message: 'Trop de tentative, veuillez réessayer plus tard',
  },
  standardHeaders: true,
  legacyHeaders: false,
});
