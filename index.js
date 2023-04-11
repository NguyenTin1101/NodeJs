const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const initAdminRouter = require('./route/admin/initAdminRouter');
const initCustomerRouter = require('./route/customer/initCustomerRouter');
const fileUpload = require('express-fileupload');
var cookieParser = require('cookie-parser');
<<<<<<< HEAD
var cors = require('cors')
let session = require('express-session');
const helmet = require("helmet");
const app = express();
const port = 3000;
const rateLimit = require('express-rate-limit')
const { xss } = require('express-xss-sanitizer');
app.use(cookieParser());

app.use(cors())
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100000, // Limit each IP to 100000 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)
=======

let session = require('express-session');


const app = express();
const port = 3000;

app.use(cookieParser());

>>>>>>> 77f075dc1e6fb5abd684d11c8c0898d261306897
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

app.use(fileUpload({
    tempFilePath: true
}));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
<<<<<<< HEAD
app.use(xss());
=======

>>>>>>> 77f075dc1e6fb5abd684d11c8c0898d261306897
app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.use(expressLayouts);

initAdminRouter(app);
initCustomerRouter(app);
app.get('/' , (req,res) => {
    res.redirect('/customer/cart')
})
app.get('*', function(req, res){
    res.render('404.ejs', {layout: './404'});
});
// app.set('layout', './customer/nolayout');


app.listen(port, () => {
    console.log("Run ...")
})