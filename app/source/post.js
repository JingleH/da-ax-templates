const DA_API = 'https://admin.da.live/source';
const ORG = 'jingleh';
const REPO = 'da-ax-templates';

const { token } = require('../utils.js');
const MOCK_PAGE = `
  <body>
    <header></header>
    <main>
      <div><h1>Hello World</h1></div>
      <div>:icon-test:</div>
      <div>wow</div>
    </main>
    <footer></footer>
  </body>`;

(async () => {
  const body = new FormData();
  const data = new Blob([MOCK_PAGE], { type: 'text/html' });
  body.set('data', data);
  
  const headers = { Authorization: `Bearer ${token}` };
  const opts = { method: 'POST', body, headers };

  const path = `${DA_API}/${ORG}/${REPO}/demo2.html`;
  const resp = await fetch(path, opts);
  console.log(resp.status);
})();