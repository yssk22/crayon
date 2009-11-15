/**
 * @class
 * @namespace Provides template utilities.
 * @requires crayon/lib/core.js
 * @requires crayon/vendor/ejs/ejs_production.js
 */
Crayon.Template = {
  /**
   * Returns the text using the <tt>t</tt> template with <tt>b</tt> bindings.
   */
  template: function(t, b){
    return new EJS({text: t}).render(b);
  }
};

if( !this.do_not_import_global ){
  Crayon.extend(this, Crayon.Template);
}else{
  Crayon.extend(Crayon.Template);
}
