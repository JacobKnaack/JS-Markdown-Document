'use strict';

const Document = require('./index');

describe('Testing the Document constructor', () => {
  let headingText = '# Here is my Title';
  let descriptionText = 'Here is some text at the beginning of my document, should be considered a description.';
  let markdown = `
    ${headingText}
    
    ![Render Content with Alternate Text](http://enbedded.content)
    [Alternate Text](http://embedded.content/with-path)

    ${descriptionText}

    Any following text should be considered an individual piece of content or exposition.

    ## This is a subtitle

    This paragraph should be used as text in reference to the heading provided above.  No matter the length this text should be present as a block below a heading tag.

    - bulleted
    - list

    Content that proceeds a bulleted list, this should appear inline with other types of content added to the Document.

    1. Enumerated
    1. list

    Content that proceeds a numbered list of items in a document.
  `;

  let document = new Document(markdown);

  it('should return a document with a title', () => {
    expect(document.title).toBe('Here Is My Title');
  });

  it('should return a list of heading tags', () => {
    expect(document.headings).toBeDefined();
    expect(document.headings.length).toBe(2);
    expect(document.headings[0]).toEqual(headingText);
  });  

  it('should contain a document description', () => {
    expect(document.description).toBeDefined();
    expect(document.description).toEqual(descriptionText);
  });
});
