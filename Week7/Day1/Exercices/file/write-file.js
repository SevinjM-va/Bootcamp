const fs = require ('fs');

fs.writeFile('output.txt', 'simple text', (err, data) => {
  if (err) {
      console.log(err);
  } else {
      console.log(data);
  }
})
