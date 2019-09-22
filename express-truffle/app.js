var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

//----------------------------------------------------------------------------
// solidity 용 코드
const Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const metacoin_abi = require('./build/contracts/MetaCoin.json')["abi"];
const metacoin_contract_adress = require('./build/contracts/MetaCoin.json')["networks"]["2508"]["address"];
var MetaCoinContrant = new web3.eth.Contract(metacoin_abi, metacoin_contract_adress);

app.get('/getAccounts', async (req, res) => {
  console.log("**** GET /getAccounts ****");
  var accounts = await web3.eth.getAccounts();
  res.send(accounts);
});

app.post('/getBalance', async (req, res) => {
  console.log("**** GET /getBalance ****");
  // console.log(req.body);
  let currentAcount = req.body.account;
  var account_balance = await MetaCoinContrant.methods.getBalance(currentAcount).call();
  var all_accounts = await web3.eth.getAccounts();
  res.send([account_balance, all_accounts]);
});

app.post('/sendCoin', async (req, res) => {
  console.log("**** GET /sendCoin ****");
  // console.log(req.body);
  let amount = req.body.amount;
  let sender = req.body.sender;
  let receiver = req.body.receiver;
  await MetaCoinContrant.methods.sendCoin(receiver, amount).send({ from: sender });

  MetaCoinContrant.methods.getBalance(sender).call()
    .then(changed_balance => res.send(changed_balance));
});
//-----------------------------------------------------------------------------

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
