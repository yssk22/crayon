/**
 * @function
 * @return true when object is Function, otherwise false.
 */
function isFunction(obj){
   return toString.call(obj) === "[object Function]";
}
exports.isFunction = isFunction;

/**
 * @function
 * @return true when object is Array, otherwise false.
 */
function isArray( obj ) {
   return toString.call(obj) === "[object Array]";
}
exports.isArray = isArray;

/**
 * @function
 * @return true when object is Object, otherwise false.
 */
function isObject(obj){
   return toString.call(obj) === "[object Object]";
}
exports.isObject = isObject;

/**
 * @function
 * @return true when object is String, otherwise false.
 */
function isString(obj){
   return toString.call(obj) === "[object String]";
}
exports.isString = isString;

/**
 * @function
 * @return true when object is Date, otherwise false.
 */
function isDate(obj){
   return toString.call(obj) === "[object Date]";
}
exports.isDate = isDate;

function extractOptions(){
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
      if( isObject(args[args.length - 1]) ){
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
exports.extractOptions = extractOptions;

/**
 * Extends a object. This is a ported function from jQuery.extend
 * @param [Object] object
 */
function extend(){
   // copy reference to target object
   var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options, name, src, copy;

   // Handle a deep copy situation
   if( typeof target === "boolean"){
      deep = target;
      target = arguments[1] || {};
      // skip the boolean and the target
      i = 2;
   }

   // Handle case when target is a string or something (possible in deep copy)
   if( typeof target !== "object" && !isFunction(target) ) {
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
               } else if ( isArray(copy) ) {
                  clone = [];
               } else if ( isObject(copy) ) {
                  clone = {};
               } else {
                  clone = copy;
               }

               // Never move original objects, clone them
               target[ name ] = extend( deep, clone, copy );

               // Don't bring in undefined values
               } else if ( copy !== undefined ) {
                  target[ name ] = copy;
               }
         }
      }
   }
   // Return the modified object
   return target;
}
exports.extend = extend;