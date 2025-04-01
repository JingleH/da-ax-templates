const { ls, isDir, ROOT } = require('../utils.js');

(async () => {
  const files = await ls(`${ROOT}/templates`);
  console.log(files);
})();