const path = require('path');
const { isDoc, isDir, ROOT, ls, cat } = require('./utils.js');

async function main() {
  try {
    const srcs = [];
    const reqs = [];
    const dirStack = [path.join(ROOT, 'templates')];
    while (dirStack.length) {
      const currDir = dirStack.pop();
      const files = await ls(currDir);
      const docs = files.filter((file) => isDoc(file));
      const dirs = files.filter((file) => isDir(file));
      docs.forEach((doc) => {
        reqs.push(cat(doc.path));
        srcs.push(doc.path);
      });
      dirs.forEach((dir) => dirStack.push(dir.path));
    }
    const docContent = await Promise.all(reqs);
    const data = srcs.map((src, index) => ({ src, content: docContent[index] }));
    data.sort((d1, d2) => d1.src.localeCompare(d2.src));
    data.forEach((doc, index) => {
      console.log(doc.src, doc.content);
    });
  } catch (e) {
    console.log(e);
  }
}

main().catch(console.error);