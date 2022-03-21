'use strict';

const keyword_extractor = require('keyword-extractor');

/**
 * Uses the keyword extractor to create a list of keywords
 * @param {String} text 
 * @param {Object} config 
 * @returns {Array<string>}
 */
module.exports = (text, config) => {
  return keyword_extractor.extract(text, {...config, 
    language: 'english',
    remove_digits: true,
    return_changed_case: true,
    return_chained_words: true,
    remove_duplicates: true,
  });
}
