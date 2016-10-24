# Meta Tag
## Decription
From W3.org spec
> The meta element represents various kinds of metadata that cannot be expressed
using the title, base, link, style, and script elements.

## MetaManager Link
**Link** takes an object value with subordinate keys representing tag attributes.

```javascript
var meta = {
     "meta": { 
        name: "description",
        content: "This is a meta description."
    }
};

var metaManager = new MetaManager(meta);

metaManager.render();
```

## Accepted Keys
#### content
Specifies the value of the document metadata associated with a particular `name`
#### http-equiv
Used to change default behaviors of servers and user agents
#### name
Defines the name associated with the document metadata.

## Required Keys
**Meta** must have at least a `content`, `http-equiv`, or `name` key.

## More information:

[W3.org Meta Spec](https://www.w3.org/TR/html5/document-metadata.html#the-meta-element)

[MDN <Meta>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)