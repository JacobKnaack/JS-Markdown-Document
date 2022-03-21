'use strict';

const { Document } = require('./');

describe('Testing the Document constructor', () => {
  let headingText = '# Here is my Title';
  let descriptionText = 'Here is some text at the beginning of my document, should be considered a description.';
  let subHeadingText = '## This is a subtitle';
  let markdown = `
    ${headingText}
    
    ![Render Content with Alternate Text](http://enbedded.content)
    [Alternate Text](http://embedded.content/with-path)

    ${descriptionText}

    Any following text should be considered an individual piece of content or exposition.  Where important information is discussed which is relavant to the main topic of document.

    ${subHeadingText}

    This paragraph should be used as text in reference to the heading provided above.  No matter the length, this text should be present as a block below a heading tag.

    - bulleted
    - list
    - items

    Content that proceeds a bulleted list, this should appear inline with other types of content added to the Document.

    1. Enumerated
    1. list

    Content that proceeds a numbered list of items in a document.
  `;

  let document = new Document(markdown);

  it('should return a document with a title', () => {
    expect(document.title).toBe('Here Is My Title');
  });

  it('should only return the first level one heading', () => {
    let document = new Document('# this is the title \n here is some content \n # I am a new heading');

    expect(document.title).toEqual('This Is The Title');
  });

  it('should return a list of heading tags', () => {
    expect(document.headings).toBeDefined();
    expect(document.headings.length).toBe(2);
    expect(document.headings[0]).toEqual(headingText);
    expect(document.headings[1]).toEqual(subHeadingText);
  });  

  it('should contain a document description', () => {
    expect(document.description).toBeDefined();
    expect(document.description).toEqual(descriptionText);
  });

  
  it('should make a list of keywords from text content', () => {
    expect(document.keywords).toBeDefined();
    expect(document.keywords.length > 0).toBeTruthy();
  }) 
});
