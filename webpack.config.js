const { resolve } = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'app.js',
        path: resolve(__dirname, '')
    }
}