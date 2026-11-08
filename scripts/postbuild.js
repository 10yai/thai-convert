// Mark each build folder with its module format so Node resolves the
// .js files correctly: ES5 build = CommonJS, ES6 build = ES modules.
const fs = require('fs');
const path = require('path');

const write = (dir, type) => {
  fs.writeFileSync(
    path.join(__dirname, '..', 'dist', dir, 'package.json'),
    JSON.stringify({ type }, null, 2) + '\n'
  );
};

write('es5', 'commonjs');
write('es6', 'module');
