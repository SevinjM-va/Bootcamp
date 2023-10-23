const chalk = require('chalk');

function colorfulMessage(message){
  console.log(chalk.blue(message));
}

colorfulMessage('Hello')