# JS Markdown Document

A minimal dependency markdown parsing library.  Creates Metadata for markdown documents using an opinionated parsing system.

## Installation

This library can be installed through your package manager of choice:

- npm: `npm install js-markdown-document`
- yarn: `yarn add js-markdown-document`

## Usage

Once installed, inject into your javascript project:

```javascript
const Document = require('js-markdown-document');

const document = new Document('# I am a title');
document.title; // I Am A Title; 
```

## Features

JS Markdown Document gives you metadata regarding the content of your markdown.  The following pieces of content are extracted from your markdown text immediately on instanstiation.

### Title

The first level one markdown heading is treated as the title.

```javascript
const document = new Document('# I am a title \n this is another block of text');

document.title; // I Am A Title; 
```

### Headings

A list of headings and subheadings is created from all heading tags.

```javascript

const document = new Document(`# I am a Title \n I am some content \n ## I am a subheading`);

document.headings[0]; // # I am a Title
document.headings[1]; // ## I am a subheading
```

### Description

The first paragraph of text can be used as a description.

```javascript

const document = new Document(`# I am a Title \n I am some content. \n ## I am a subheading`);

document.description; // I am some content 

```

### Keywords

Keywords are created from the content of your document.

```javascript

const document = new Document(`
  This should parse keywords into a list.
`);

document.keywords; // [ 'parse', 'keywords', 'list' ]
```

## Contributions

All contributions require the following

### User Stories

### Acceptance Tests

### Style Guide

## Contributors

- Jacob Knaack | github | npm
