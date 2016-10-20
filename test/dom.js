var test = require('unit.js');
var MetaManager = require('../lib/index.js');

describe('Building tags', function() {
    var jsdom = require('jsdom').jsdom;
    document = jsdom('<html><head><script></script></head><body></body></html>');

    var metaManager = new MetaManager(
        {
            "base": { 
                href: "base href",
                target: "_blank"
            },
            "meta": [
                { name: "description", content: "content value" }
            ],
            "title": "Test page title"
        }
    );
    
    metaManager.render();
    
    it('applies a title tag', function() {
         test.assert(document.title);
    });
    
    it('applies a base tag', function() {
         test.assert(document.getElementsByTagName('base'));
    });
});