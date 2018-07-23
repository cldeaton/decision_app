var exec = require("child_process").exec;
var inside = true;

console.log(process.env.LATITUDE);
console.log(process.env.LONGITUDE);


if (inside === false) {
  console.log("Exiting!!");
  process.exit();
} else {
  console.log("Here we go!!");
  exec("USER_NUMBER=+17046898590 MESSAGE_BODY='HEY DO SOMETHING' node ../sms_app/index.js", function(err, stdout, stderror) {
    console.log(stdout);
  });
}
