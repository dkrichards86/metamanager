var META_MANAGER_ATTR = 'data-meta-manager';
var REQUIRED_KEYS = require('./requiredkeys.js');
var VALID_KEYS = require('./validkeys.js');

/**
 * Initialize MetaManager
 * @param {object} tags - Tags to be added to the page (optional)
 * @returns {void}
 */
var MetaManager = function(tags) {
  this.tags = {};

  /**
   * Writes tags to the DOM
   * @returns {void}
   */
  this.render = function() {
    _clearExistingTags();
  
    for (var key in this.tags) {
      if (key && this.tags.hasOwnProperty(key)) {
        if (key == 'title') {
          _renderTitleTag(this.tags[key]);
        }
        else {
          if (Array.isArray(this.tags[key])) {
            _parseTagArray(key, this.tags[key]);
          }
          else {
            _renderTag(key, this.tags[key]);
          }
        }
      }
    }
  };
  
  /**
   * Set up tags for parsing
   * @param {object} tags - Tags to be added
   * @returns {void}
   */
  this.setTags = function(tags) {
    if (typeof tags != 'object') {
      return;
    }
  
    var setOne = function(oneKey) {
      return _setTagObject(key, oneKey);
    }.bind(this);
  
    for (var key in tags) {
      if (tags.hasOwnProperty(key) && _validKey(key)) {
        if (key == 'title') {
          this.tags[key] = tags[key];
        }
        else if (key == 'base') {
          this.tags[key] = _setTagObject(key, tags[key]);
        }
        else {
          this.tags[key] = tags[key].map(setOne).filter( function(elem) { 
            return elem;
          });
        }
      }
    }
  };
  
  /**
   * Clear all tags with our META_MANAGER_ATTR constant
   * @returns {void}
   */
  function _clearExistingTags() {
    var elems = document.querySelectorAll('[' + META_MANAGER_ATTR + ']');
  
    for (var i = 0; i < elems.length; i++) {
      elems[i].parentNode.removeChild(elems[i]);
    }
  };
  
  /**
   * Iterate over tag arrays and apply each
   * @param {string} key - Top level key to be parsed
   * @param {object} tagData - Data associated with this tag
   * @returns {void}
   */
  function _parseTagArray(key, tagData) {
    var renderOne = function(oneTag) {
      _renderTag(key, oneTag);
    }.bind(this);
  
    tagData.forEach(renderOne);
  };
  
  /**
   * Build the tag markup and inject it as required
   * @param {string} key - Top level key to be parsed
   * @param {object} tagData - Data associated with this tag
   * @returns {void}
   */
  function _renderTag(key, tagData) {
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
   * Apply title tag to DOM
   * @param {string} text - Title tag text
   * @returns {void}
   */
  function _renderTitleTag(text) {
    document.title = text;
  };
  
  /**
   * Process a tag object and validate keys
   * @param {string} tagKey - Top level key to be parsed
   * @param {object} tagData - Data associated with this tag
   * @return {object} - validated  tag object
   */
  function _setTagObject(tagKey, tagData) {
    var returnObj = {};
    var hasRequired = true;
    
    if (tagKey in REQUIRED_KEYS){
      // this tag has required keys so we need to check for them
      hasRequired = false;
    }
  
    for (var objKey in tagData) {
      if (!hasRequired && REQUIRED_KEYS[tagKey].indexOf(objKey) !== -1) {
        // a required key exists
        hasRequired = true;
      }
      
      if (VALID_KEYS[tagKey].indexOf(objKey) != -1) {
        returnObj[objKey] = tagData[objKey];
      }
    }
  
    if (hasRequired) {
      return returnObj;
    }
    
    return null;
  };
  
  /**
   * Validate keys to ensure they can be written into the head
   * @param {string} key - Top level key to be validated
   * @returns {void}
   */
  function _validKey(key) {
    return key in VALID_KEYS;
  };
  
  if (tags) {
    this.setTags(tags);
  }
};
module.exports = MetaManager;
