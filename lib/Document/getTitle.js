'use strict';

/**
 * @param {String} content
 * @returns {String}
 */
module.exports = (content) =>  {
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


  return titleCase.replace(/\W\s/g, '').trim();
}