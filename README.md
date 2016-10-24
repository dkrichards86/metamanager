# MetaManager
As modern search engines become more adept at rendering JavaScript, developers will 
need a way to insert dynamic meta content for search engine optimization. Enter 
MetaManager. MetaManager is a tool for managing a page's head content.

## Basic Usage
First initialize the tag object...
```javascript
var metaManager = new MetaManager(
    {
        "base": { href: "base href" },
        "meta": [ { name: "name value" }, { content: "content value" } ]
    }
);
```
... then render!
```javascript
metaManager.render();
```

To update tags, set and rerender.
```javascript
metaManager.setTags({ "title": "Test page title" });
metaManager.render();
```

## Further Reading
For more information on each available tag, as well as example usage, consult the
guides.

* [Base](https://github.com/dkrichards86/metamanager/tree/master/docs/Base.md)
* [Link](https://github.com/dkrichards86/metamanager/tree/master/docs/Link.md)
* [Meta](https://github.com/dkrichards86/metamanager/tree/master/docs/Meta.md)
* [Title](https://github.com/dkrichards86/metamanager/tree/master/docs/Title.md)