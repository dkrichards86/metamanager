# MetaManager
As modern search engines become more adept at rendering JavaScript, developers will 
need a way to insert dynamic meta content for search engine optimization. Enter 
MetaManager. MetaManager is a tool for managing a page's head content.

## Usage
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

To update tags, 
```javascript
metaManager.setTags({ "title": "Test page title" });
```

and rerender.
```javascript
metaManager.render();
```

## Available Tags
### Base
Value is a single object

**Valid Keys**
* href
* target

### Link
Value is an array of objects.

**Valid Keys**
* charset
* crossorigin
* disabled
* href
* hreflang
* integrity
* media
* methods
* rel
* rev
* sizes
* target
* title
* type
  
### Meta
Value is an array of objects.

**Valid Keys**
* charset
* content
* http-equiv
* name
* scheme

### Script
Value is an array of objects.

**Valid Keys**
* async
* crossorigin
* defer
* integrity
* language
* src
* text
* type

### Style
Value is an array of objects.

**Valid Keys**
* type
* media
* scoped  
* title

### Title
Value is a string representing the page's title