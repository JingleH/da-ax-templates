import { LitElement } from 'https://da.live/deps/lit/lit-all.min.js';
let ha = 1;
export default class DaTagSelector extends LitElement {
  static properties = {
    project: { type: String },
    token: { type: String },
    actions: { type: Object },
    parent: { type: Object },
  };

  myButtonClicked(e) {
    e.preventDefault();

    // ... collect the text to insert in the document
    const newText = ha++;

    this.actions.sendText(newText); // Put the text at the cursor in the doc
    this.actions.sendHtml(newHtml); // Put the HTML at the cursor in the doc
    this.actions.closeLibrary();    // Optional, this will close the plugin widget
  }
}