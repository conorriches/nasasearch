const fs = require('fs');
const path = require('path');

const request = () => new Promise((resolve, reject) => {
    return fs.readFile(path.resolve(__dirname, '../__fixtures__/image-search.json'), 'utf8', (err, data) => {
        if (err)  reject(err)
        resolve(data);
    });
})

export default request;
