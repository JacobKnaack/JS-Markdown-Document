'use strict';

/**
 * Find the ending index of a Top level Markdown title
 * @param {String} rawText 
 * @param {Number} startFrom 
 * @returns Number
 */
module.exports = (rawText, startFrom) => {
  let content = rawText.matchAll(/\n|#{2,6}\s/g);
  for (let match of content) {
    if (match.index > startFrom) {
      return match.index;
    }
  }
}