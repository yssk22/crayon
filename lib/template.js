// !code vendor/crayon/lib/crayon.js
// !code vendor/crayon/lib/escape.js
// !code vendor/crayon/vendor/ejs/ejs.js
/**
 * @class
 * @namespace Provides template utilities.
 * @requires crayon/lib/crayon.js
 * @requires crayon/vendor/ejs/ejs.js
 */
Crayon.Template = {
   /**
    * Returns the text using the <tt>t</tt> template with <tt>b</tt> bindings.
    */
   render: function(t, b){
      return new EJS({text: t}).render(b || {});
   }
};

// modify EJS.Scanner.to_text(string) function to escape html by default.
EJS.Scanner.to_text = function(input){
   if(input == null || input === undefined)
      return '';
   if(Crayon.isDate(input))
      return input.toDateString();
   if(Crayon.isString(input)) // html escape by default
      return !input.isHtmlSafe() ? Crayon.Escape.h(input) : input;
   if(input.toString)
      return input.toString();
	return '';
};

if( !this.do_not_import_global ){
   Crayon.extend(this, Crayon.Template);
}else{
   Crayon.extend(Crayon.Template);
}
