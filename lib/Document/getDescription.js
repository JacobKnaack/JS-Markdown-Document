'use strict';

/**
 * Returns the first paragraph of text from the raw markdown string.
 * @param {String} rawText 
 * @returns {String}
 */
module.exports = (rawText) => {
  let content = rawText.match(/^\s*[A-Za-z].*(?:\n[A-Za-z].*)*/gmi);
  return content[0].trim();
}