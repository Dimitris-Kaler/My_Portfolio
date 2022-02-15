var createError = require('http-errors');
var express = require('express');
var path = require('path');
require('dotenv').config()
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser=require('body-parser')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const flash=require("express-flash")
const session=require("express-session")
// const { google } = require('googleapis')
// const OAuth2 = google.auth.OAuth2
// const oauth2Client = new OAuth2(
// process.env.CLIENT_ID,
// process.env.CLIENT_SECRET,
// "https://developers.google.com/oauthplayground")

// oauth2Client.setCredentials({
//     refresh_token:process.env.Refresh_Token
// })
// const accessToken = oauth2Client.getAccessToken()


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(session({
  secret:"this my long string that is used for session in http",
  resave:false,
  saveUnitialized:false
}))

///Initialize the flash middleware
app.use(flash())


app.use('/', indexRouter);
app.use('/users', usersRouter);


app.post('/',async (req,res)=>{
  res.send("Email.sent")
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
