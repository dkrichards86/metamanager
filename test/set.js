var test = require('unit.js');
var MetaManager = require('../lib/index.js');

describe('Setting values', function() {
    var metaManager = new MetaManager(
        {
            "base": { 
                href: "base href"
                
            },
            "meta": [
                { name: "name value" },
                { content: "content value" }
            ]
        }
    );
    
    it('applies individual tags', function() {
        test.assert(Object.keys(metaManager.tags).indexOf("base") !== -1);
    });
    
    it('applies tag arrays', function() {
        test.assert(Array.isArray(metaManager.tags["meta"]));
    });
    
    metaManager.setTags(
        {
            fake: "doesn't exist",
            title: "title does exist"
        }
    );

    it('adds new tags', function() {
        test.assert(Object.keys(metaManager.tags).indexOf("title") !== -1);
    });
    
    metaManager.setTags(
        {
            "meta": [
                { "name": "new name value" , "fake": "shouldn't be here"}
            ]
        }
    );
    
    it('strips invalid tags', function() {
         test.assert(Object.keys(metaManager.tags).indexOf("fake") === -1);
    });
    
    it('strips invalid tag key', function() {
         test.assert(metaManager.tags['meta'].indexOf("fake") === -1);
    });
    
    metaManager.setTags(
        {
            "meta": [
                { "fake": "shouldn't be here"}
            ]
        }
    );
    
    it('doesnt add tags with missing required keys', function() {
         test.assert(metaManager.tags['meta'].length === 0);
    });
});