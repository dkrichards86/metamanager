# Title Tag
## Decription
From W3.org spec
> The title element represents the document's title or name. Authors should use 
titles that identify their documents even when they are used out of context, 
for example in a user's history or bookmarks, or in search results. The document's
title is often different from its first heading, since the first heading does not
have to stand alone when taken out of context. There must be no more than one 
title element per document.

## MetaManager
**Title** takes a string value representing the page title.

```javascript
var pageTitle = {
    "title": "My Page Title"
};

var metaManager = new MetaManager(pageTitle);

metaManager.render();
```

## Accepted Keys
None. Title is a string.

## Required Keys
None. Title is a string.

## More information:

[W3.org Title Spec](https://www.w3.org/TR/html5/document-metadata.html#the-title-element)

[MDN <Title>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)