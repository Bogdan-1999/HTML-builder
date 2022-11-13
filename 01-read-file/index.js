const fs = require('fs');


const readText = fs.createReadStream(__dirname + '/text.txt', 'utf-8');

readText.on('data', function (chunk) {
    console.log(chunk);
})