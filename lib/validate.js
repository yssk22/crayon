// !code vendor/crayon/lib/crayon.js
// !code vendor/crayon/lib/crayon.js
/**
* @class
* @namespace Holds functionality for validations
* @requires crayon/lib/crayon.js
*/
Crayon.Validate = {
  /**
  * Validate the field value is neither undefined nor null.
  */
  require : function(doc, field, message){
    message = message || "Document must have a " + field;
    if(doc[field] === undefined || doc[field] === null){
      throw({forbidden : message});
    }
  },

  /**
  * Validate the field value is not changed.
  */
  unchanged : function(newDoc, oldDoc, field, message){
    message = message || "Field cannot be changed: " + field;
    if (oldDoc && toJSON(oldDoc[field]) != toJSON(newDoc[field])){
      throw({forbidden : message});
    }
  }
};
