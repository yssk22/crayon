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
      if (oldDoc && !(oldDoc["_deleted"])){
         var o = oldDoc[field];
         var n = newDoc[field];
         if( o != undefined && n != undefined ){
            if( toJSON(o) != toJSON(n) ){
               throw({forbidden : message});
            }
         }else{
           if( o !== n ){
               throw({forbidden : message});
           }
         }
      }
   },

   /**
    * Validate the field value using specific comparable function.
    */
   compare : function(newDoc, oldDoc, field, fun, message){
      message = message || "Comparing field failiure: " + field;
      if( oldDoc && !(fun(newDoc[field], oldDoc[field]))){
         throw({forbidden : message});
      }
   }
};

if( !this.do_not_import_global ){
  Crayon.extend(this, Crayon.Validate);
}else{
  Crayon.extend(Crayon.Validate);
}
