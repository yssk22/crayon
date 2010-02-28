/**
* @class
* @namespace Provides text helper utilities.
* @requires crayon/lib/crayon.js
* @requires crayon/vendor/showdown/compressed/showdown.js
*/
// !code vendor/crayon/lib/crayon.js
// !code vendor/crayon/vendor/showdown/compressed/showdown.js
Crayon.Text = {
   markdown: function(text){
      Crayon.Text._MARKDOWN_CONVERTER =
         Crayon.Text._MARKDOWN_CONVERTER || new Showdown.converter();
      return Crayon.Text._MARKDOWN_CONVERTER.makeHtml(text).htmlSafe();
   },
   cycle: function(){
      if(Crayon.Text._CYCLE_CURRENT == undefined){
         Crayon.Text._CYCLE_CURRENT = 0;
      }
      var i = Crayon.Text._CYCLE_CURRENT % arguments.length;
      Crayon.Text._CYCLE_CURRENT += 1;
      return arguments[i];
   }
};

if( !this.do_not_import_global ){
  Crayon.extend(this, Crayon.Text);
}else{
  Crayon.extend(Crayon.Text);
}
