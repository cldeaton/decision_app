var express    = require("express"),
    app        = express(),
    bodyParser = require('body-parser'),
    exec       = require("child_process").exec;


app.use(bodyParser.json()); // for parsing application/json
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}); //Disables browser security to allow communication with localhost

app.post("/", function(req, res){
  console.log(req.body)
  command = `USER_NUMBER='${req.body.userNumber}' MESSAGE_BODY='${req.body.messageBody}' node ../sms_app/index.js`;
  console.log(command)
  exec(command, function(err, stdout, stderror){
    console.log(stdout);
    res.status(200).send("Message Sent");
  });

  console.log(req.body)
})


//listening Route
app.listen(process.env.PORT || 2000, function(){
    console.log("Server has started!!");
});
