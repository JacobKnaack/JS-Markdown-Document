'use strict';

const getTitleEnd = require('./getTitleEnd.js');
const getTitle = require('./getTitle.js');
const getHeadings = require('./getHeadings.js');
const getDescription = require('./getDescription.js');
const getKeywords = require('./getKeywords.js');

/**
 * Document class
 * @params {String} text - raw markdown string, parsed on construction.
*/

class Document {
  constructor(text) {
    this.rawText = text;
    this.titleStart = text.search(/#\s/g);
    this.titleEnd = getTitleEnd(text, this.titleStart);
    this.title = getTitle(this.titleContent());
    this.description = getDescription(text);
    this.headings = getHeadings(text);
    this.keywords = getKeywords(text);
  }

  titleContent() {
    return this.rawText.slice(this.titleStart, this.titleEnd);
  }
}

exports.Document = Document;
exports.getDescription = getDescription;
exports.getHeadings = getHeadings;
exports.getTitle = getTitle;
exports.getKeywords = getKeywords;
