const path = require('path');
const { isDoc, ROOT, ls, cat, parseBodyText } = require('./utils.js');

async function main() {
  try {
    const paths = await ls(path.join(ROOT, 'templates'));
    const docSrcs = paths
      .filter((file) => isDoc(file))
      .map((doc) => doc.path);
    const docContent = await Promise.all(docSrcs.map((src) => cat(src)));
    docSrcs.forEach((docSrc, index) => {
      console.log(docSrc, docContent[index]);
    });
  } catch (e) {
    console.log(e);
  }
}

main().catch(console.error);