// !code vendor/crayon/lib/crayon.js
// !code vendor/crayon/lib/escape.js
/**
* @class
* @namespace Holds functionality for escaping charactors.
* @requires crayon/lib/core.js
* @requires crayon/lib/escape.js
*/
Crayon.Tag = {
  /**
  * Retrurns a tag string.
  * @param {String} name a tag name such as "p".
  * @param [Object] options kev-value pairs for the tag attributes. The default is <tt>{}</tt>.
  * @param [Boolean] open if true, the closer is excluded. The default is fasle.
  * @param [Boolean] escape if true, the special chars in tag attributes specified by <tt>options</tt> is escaped.
  */
  tag : function(name, options, open, escape){
    if( escape === undefined ){
      escape = true;
    }
    var str = "<" + name;
    if(options){
      for(var attr_name in options){
        str += " " + attr_name + '="' + (escape ? h(options[attr_name]) : options[attr_name]) + '"';
      }
    }
    return str + (open ? ">" : "/>");
  },

  /**
  * Retrurns a tag string.
  * @param {String} name a tag name such as "p".
  * @param {String or Function} content The text inserted into the tag. If a function is passed, the returned value is inserted.
  * @param [Object] options kev-value pairs for the tag attributes. The default is <tt>{}</tt>.
  * @param [Boolean] escape if true, the special chars in tag attributes specified by <tt>options</tt> is escaped.
  */
  content_tag : function(name, content, options, escape){
    var str = tag(name, options, true, escape);
    str += Crayon.isFunction(content) ? content() : content.toString();
    return str + "</" + name + ">";
  }
};

if( !this.do_not_import_global ){
  Crayon.extend(this, Crayon.Tag);
}else{
  Crayon.extend(Crayon.Tag);
}
