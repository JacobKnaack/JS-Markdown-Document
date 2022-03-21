'use strict';

/**
 * 
 * @param {String} rawText 
 * @returns {Array<String>}
 */
module.exports = (rawText) => {
  let content = rawText.matchAll(/(#{1,6}.*)/gi);
  let headings = [];
  for (let match of content) {
    headings.push(match[0]);
  }

  return headings;
}
