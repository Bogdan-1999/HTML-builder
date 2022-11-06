const fs = require('fs');
const readline = require('readline');
const path = require('path');
const out = fs.WriteStream(path.join(__dirname, 'text.txt'), {encoding: 'utf-8'});

process.stdout.write('Press Ctrl + C or type "exit" to quit\nEnter text: ');

process.stdin.on('data', (data) => {
    if (data.toString().trim() == 'exit'){
        process.exit();
    } else {
        out.write(data)
    }
});

process.on('SIGINT', () => process.exit());

process.on('exit', () => process.stdout.write('\nGoodbye!\n'));