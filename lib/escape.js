// !code vendor/crayon/lib/crayon.js
/**
 * @class
 * @namespace Provides escaping utilities.
 * @requires crayon/lib/crayon.js
 */
Crayon.Escape = {
  /**
   * Escapes html special charactors.
   */
  html_escape : function(s){
    return s.toString().replace(/&/g, "&amp;")
      .replace(/\"/g, "&quot;")
      .replace(/\'/g, "&#039;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  },

  /**
   * Escapes json special charactors.
   */
  json_escape : function(s){
    return s.toString().replace(/&/g, "\u0026")
      .replace(/</g, "\u003C")
      .replace(/>/g, "\u003E");
  }
};

/**
 * @function
 * @description
 * alias for html_escape
 */
Crayon.Escape.h = Crayon.Escape.html_escape;
/**
 * @function
 * @description
 * alias for json_escape
 */
Crayon.Escape.j = Crayon.Escape.json_escape;

if( !this.do_not_import_global ){
  Crayon.extend(this, Crayon.Escape);
}else{
  Crayon.extend(Crayon.Escape);
}
