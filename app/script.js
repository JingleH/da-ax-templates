import { mockBodies } from './mockBodies.js';

function parseBodyText(bodyText) {
  const parser = new DOMParser();
  return parser.parseFromString(bodyText, 'text/html');
}

function createTag(tag, attributes, html, options = {}) {
  const el = document.createElement(tag);
  if (html) {
    if (
      html instanceof HTMLElement ||
      html instanceof SVGElement ||
      html instanceof DocumentFragment
    ) {
      el.append(html);
    } else if (Array.isArray(html)) {
      el.append(...html);
    } else {
      el.insertAdjacentHTML('beforeend', html);
    }
  }
  if (attributes) {
    Object.entries(attributes).forEach(([key, val]) => {
      el.setAttribute(key, val);
    });
  }
  options.parent?.append(el);
  return el;
}

function block2Table(block) {
  const blockName = block.className;
  let maxColCnt = 1;
  const rows = [...block.querySelectorAll(':scope > div')].map((rowDiv) => {
    const row = createTag('tr');
    const cols = [...rowDiv.querySelectorAll(':scope > div')].map((col) => {
      const cell = createTag('td');
      cell.append(col);
      return cell;
    });
    maxColCnt = Math.max(maxColCnt, cols.length);
    row.append(...cols);
    return row;
  });
  const table = createTag('table', { class: 'block-table' });
  const tableBody = createTag(
    'tbody',
    {},
    createTag('th', { colspan: maxColCnt }, blockName || 'unknown block name'),
  );
  tableBody.append(...rows);
  const colGroup = createTag('colgroup');
  colGroup.append(...Array.from({ length: maxColCnt }).map(() => createTag('col')));
  table.append(colGroup, tableBody);
  return table;
}

function body2Row({ text, path }) {
  const body = parseBodyText(text);
  const main = body.querySelector('main');
  const sections = main.querySelectorAll(':scope > div');
  const row = createTag('div', { class: 'row' }, createTag('div', { class: 'path' }, path));
  sections.forEach((section, i) => {
    row.append(createTag('div', { class: 'node-wrapper section-start' }, `section-${i + 1}-->`));
    [...section.children].forEach((node) => {
      const nodeWrapper = createTag('div', { class: 'node-wrapper' });
      if (node.tagName === 'DIV') {
        nodeWrapper.append(block2Table(node));
      } else {
        nodeWrapper.append(node);
      }
      row.append(nodeWrapper);
    });
  });
  return row;
}

function main() {
  const bodies = mockBodies();
  const rows = bodies.map((body) => body2Row(body));

  document.body.append(...rows);
}

main();
