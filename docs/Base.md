# Base Tag
## Decription
From W3.org spec
> The base element allows authors to specify the document base URL for the purposes
of resolving relative URLs, and the name of the default browsing context for the
purposes of following hyperlinks. The element does not represent any content beyond
this information. There must be no more than one base element per document.

## MetaManager Base
**Base** accepts object value with subordinate keys representing tag attributes.

```javascript
var pageBase = {
     "base": { 
        href: "https://github.com/dkrichards86/metamanager",
        target: "_blank"
    }
};

var metaManager = new MetaManager(pageBase);

metaManager.render();
```

## Accepted Keys
#### href
The `href` key is used to resolve relative URLs on a page.

#### target
`target` is used to set the browser's default behavior when following links.

## Required Keys
**Base** must have either a `href` or a `target`.

## More information:

[W3.org Base Spec](https://www.w3.org/TR/html5/document-metadata.html#the-base-element)

[MDN <Base>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)