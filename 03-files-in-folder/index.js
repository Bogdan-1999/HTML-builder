const fs = require('fs');
const path = require('path');


fs.readdir('secret-folder', (err, data) => {
    console.log(data);
    data.map((file) => {
        let info = '';
        info += file + ' ';
        let rasshirenie = path.extname(file);
        info += rasshirenie + ' ';
        console.log(info)
    })
})