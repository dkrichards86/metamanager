# Link Tag
## Decription
From W3.org spec
> The link element allows authors to link their document to other resources. The
destination of the link(s) is given by the href attribute, which must be present
and must contain a valid non-empty URL potentially surrounded by spaces. If the 
attribute is absent, then the element does not define a link.

## MetaManager Link
**Link** takes an object value with subordinate keys representing tag attributes.

```javascript
var linkTag = {
     "link": { 
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Roboto"
    }
};

var metaManager = new MetaManager(linkTag);

metaManager.render();
```

## Accepted Keys
#### crossorigin
Specifies whether or not CORS must be used for fetching resources.
#### disabled
Disables a link attribute.
#### href
Specifies the URL of the desired resource
#### hreflang
Indicates the language of the resource
#### media
Specifies the media type of the desired resource
#### rel
Specifies the relationship of the desired document to the current document.
#### rev
Specifies the relationship of the current document to the desired document.
#### sizes
Specifies the size (width and height) of the desired resource. Required if `rel`
is of icon type.
#### type
MIME type of resource

## Required Keys
**Link** must have a `rel` key

## More information:

[W3.org Link Spec](https://www.w3.org/TR/html5/document-metadata.html#the-link-element)

[MDN <Link>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)