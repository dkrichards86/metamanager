var test = require('unit.js');
var MetaManager = require('../lib/index.js');

describe('Importing MetaManager', function() {
    it('imported properly', function() {
        test.assert(typeof MetaManager == 'function');
    });
});