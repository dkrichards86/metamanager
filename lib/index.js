var scriptKeys = require('./validkeys.js');

var META_MANAGER_ATTR = "data-meta-manager";

var VALID_KEYS = [
    "base",
    "link",
    "meta",
    "script",
    "style",
    "title"
];
 
/**
 * Initialize!
 */
function MetaManager(tags) {
    this.tags = {};
    
    if (tags) {
        this.setTags(tags);
    }
}

/**
 * Writes tags to the DOM
 */
MetaManager.prototype.render = function() {
    this._clearExistingTags();
        
    for (var key in this.tags) {
        if (this.tags.hasOwnProperty(key)) {
            if (key == 'title') {
                this._renderTitleTag(this.tags[key]);
            }
            else {
                if (Array.isArray(this.tags[key])) {
                    this._parseTagArray(key, this.tags[key]);
                }
                else {
                    this._renderTag(key, this.tags[key]);
                }
            }
        }
    }
};

/**
 * Introduce new tags to the page
 */
MetaManager.prototype.setTags = function(tags) {
    if (typeof tags != 'object') {
        return;
    }
    
    for (var key in tags) {
        if (tags.hasOwnProperty(key) && this._validKey(key)) {
            if (key == 'title') {
                this.tags[key] = tags[key];
            }
            else if (key == 'base') {
                this.tags[key] = this._setTagObject(key, tags[key]);
            }
            else {
                this.tags[key] = tags[key].map( function(oneKey) {
                   return this._setTagObject(key, oneKey);
                }.bind(this));
            }
        }
    }
};

/**
 * Clear all tags with our META_MANAGER_ATTR constant
 */
MetaManager.prototype._clearExistingTags = function() {
    var elems = document.querySelectorAll('[' + META_MANAGER_ATTR + ']');

    for (var i = 0; i < elems.length; i++) {
        elems[i].parentNode.removeChild(elems[i]);
    }
};

/**
 * Iterate over tag arrays and apply each
 */
MetaManager.prototype._parseTagArray = function(key, tagData) {
    tagData.forEach( function (oneTag) {
        this._renderTag(key, oneTag);
    });
};

/**
 * Build tag markup and inject accordingly
 */
MetaManager.prototype._renderTag = function(key, tagData) {
    var newTag = document.createElement(key);
    for (var dataValue in tagData) {
        if (tagData.hasOwnProperty(dataValue)) {
            newTag[dataValue] = tagData[dataValue];
        }
    }

    newTag.setAttribute(META_MANAGER_ATTR, true);
    document.head.appendChild(newTag);
};

/**
 * Apply render tag to DOM
 */
MetaManager.prototype._renderTitleTag = function(text) {
    document.title = text;
};

/**
 * Process a tag object and apply and valid key to our tag object
 */
MetaManager.prototype._setTagObject = function(tagKey, tagData) {
    var returnObj = {};
    
    for (var objKey in tagData) {
        if (scriptKeys[tagKey].indexOf(objKey) != -1) {
            returnObj[objKey] = tagData[objKey];
        }
    }
       
    return returnObj;
}

/**
 * Validate keys to ensure they can be written into the head
 */
MetaManager.prototype._validKey = function(key) {
    return VALID_KEYS.indexOf(key) != -1;
};

module.exports = MetaManager;
