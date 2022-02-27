'use strict';

/**
 * Document class
 * @params {String} text - raw markdown string, parsed on construction.
*/

class Document {
  constructor(text) {
    this.rawText = text;
    this.titleStart = text.search(/#\s/g);
    this.titleEnd = this._getTitleEnd();
    this.title = this._getTitle();
    this.description = this._getDescription();
    this.headings = this._getHeadings();
    this.keywords = [];
  } 

  _getTitleEnd() {
    let content = this.rawText.matchAll(/\n|#{2,6}\s/g);
    for (let match of content) {
      if (match.index > this.titleStart) {
        return match.index;
      }
    }
  }

  _getTitle() {
    let content = this.titleContent();
    let titleCase = content.split('').reduce((sentence, letter) => {
      let lastCharacter = sentence[sentence.length - 1];
      if (
        lastCharacter === ' ' ||
        lastCharacter == '#'
      ) {
        letter = letter.toUpperCase();
      }
      return sentence += letter;
    }, '');
    
  
    return titleCase.replace(/\W\s/g, ''); 
  }

  titleContent() {
    return this.rawText.slice(this.titleStart, this.titleEnd);
  }

  _getHeadings() {
    let content = this.rawText.matchAll(/(#{1,6}.*)/gi);
    let headings = [];
    for (let match of content) {
      headings.push(match[0]);
    }
    console.log(headings);
    return headings;
  }

  _getDescription() {
    let content = this.rawText.match(/^\s*[A-Za-z].*(?:\n[A-Za-z].*)*/gmi);
    return content[0].trim();
  }
}

module.exports = Document;
