const DA_API = 'https://admin.da.live/source';
const ORG = 'jingleh';
const REPO = 'da-ax-templates';

const { token } = require('../utils.js');

(async () => {
  const headers = { Authorization: `Bearer ${token}` };
  const opts = { method: 'GET', headers };

  const path = `${DA_API}/${ORG}/${REPO}/demo2.html`;
  try {
    const resp = await fetch(path, opts);
    console.log(resp.status);
    const text = await resp.text();
    console.log(text);
  } catch (e) {
    console.log('error:', e);
  }
  
})();