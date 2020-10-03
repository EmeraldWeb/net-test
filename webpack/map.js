const Path = require('path');
const root = Path.resolve(__dirname, '../');

module.exports = {
    root,
    src: `${root}/src`,
    build: `${root}/build`,
};
