'use strict';

const { Document, getDescription, getHeadings, getKeywords, getTitle } = require('./lib/Document');

exports.getDescription = getDescription;
exports.getHeadings = getHeadings;
exports.getKeywords = getKeywords;
exports.getTitle = getTitle;

module.exports = Document;