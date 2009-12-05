if(!Crayon){
   /**
    * @namespace Holds core static functions
    * @class Crayon class
    * @description
    * This class is originated from jQuery.core functions and provides basic functions for Crayon libraries.
    * @see <a href="http://jqueryjs.googlecode.com/svn/tags/1.3.2/src/core.js">jQuery 1.3.2</a>
    */
   var Crayon = {};

   // ------
   //  core class extensions
   // !code vendor/crayon/vendor/strftime/strftime-min-modified.js
   // ------

   /**
    * @function
    * @return true when object is Function, otherwise false.
    */
   Crayon.isFunction = function( obj ) {
      return toString.call(obj) === "[object Function]";
   };

   /**
    * @function
    * @return true when object is Array, otherwise false.
    */
   Crayon.isArray = function( obj ) {
      return toString.call(obj) === "[object Array]";
   };

   /**
    * @function
    * @return true when object is Object, otherwise false.
    */
   Crayon.isObject = function(obj){
      return toString.call(obj) === "[object Object]";
   };

   /**
    * @function
    * @return true when object is String, otherwise false.
    */
   Crayon.isString = function(obj){
      return toString.call(obj) === "[object String]";
   };

   /**
    * @function
    * @return true when object is Date, otherwise false.
    */
   Crayon.isDate = function(obj){
      return toString.call(obj) === "[object Date]";
   };

   Crayon.extractOptions = function(){
      if( arguments.length.length == 0 ){
         return {
            args    : [],
            options : null
         };
      }else{
         var args = new Array(arguments.length);
         for(var i=0; i<args.length; i++){
            args[i] = arguments[i];
         }
         if( Crayon.isObject(args[args.length - 1]) ){
            var options = args.pop();
            return {
               args: args,
               options: options
            };
         }else{
            return {
               args: args,
               options: null
            };
         }
      }
   }
   /**
    * Extends a objecct or Crayon itself.
    * @param [Object] object
    */
   Crayon.extend = function(){
      // copy reference to target object
      var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options, name, src, copy;

      // Handle a deep copy situation
      if ( typeof target === "boolean" ) {
         deep = target;
         target = arguments[1] || {};
         // skip the boolean and the target
         i = 2;
      }

      // Handle case when target is a string or something (possible in deep copy)
      if ( typeof target !== "object" && !Crayon.isFunction(target) ) {
         target = {};
      }

      // extend Crayon itself if only one argument is passed
      if ( length === i ) {
         target = this;
         --i;
      }

      for ( ; i < length; i++ ) {
         // Only deal with non-null/undefined values
         if ( (options = arguments[ i ]) != null ) {
            // Extend the base object
            for ( name in options ) {
               src = target[ name ];
               copy = options[ name ];

               // Prevent never-ending loop
               if ( target === copy ) {
                  continue;
               }

               // Recurse if we're merging object values
               if ( deep && copy && typeof copy === "object" && !copy.nodeType ) {
                  var clone;

                  if ( src ) {
                     clone = src;
                  } else if ( Crayon.isArray(copy) ) {
                     clone = [];
                  } else if ( Crayon.isObject(copy) ) {
                     clone = {};
                  } else {
                     clone = copy;
                  }

                  // Never move original objects, clone them
                  target[ name ] = Crayon.extend( deep, clone, copy );

                  // Don't bring in undefined values
               } else if ( copy !== undefined ) {
                  target[ name ] = copy;
               }
            }
         }
      }

      // Return the modified object
      return target;
   };

   Crayon.extend(String.prototype, {
      htmlSafe : function(){
         this._html_safe = true;
         return this;
      },
      isHtmlSafe : function(){
         return this._html_safe == true;
      }
   });

} // - end of if(Crayon)
