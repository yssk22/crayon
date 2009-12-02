// !code vendor/crayon/lib/crayon.js
// !code vendor/crayon/lib/tag.js
/**
* @class
* @namespace Holds functionality for escaping charactors.
* @requires crayon/lib/core.js
* @requires crayon/lib/escape.js
*/
Crayon.Form = {
   /**
    * Returns a set of select tags for date selection.
    * @param {String} date the default selected value.
    * @param [Object] options kev-value pairs for the date list.
    * @param [Object] html_options kev-value pairs passed to each select tag.
    */
   select_date : function(date, option, html_option){
      date = date || new Date();
      var opt      = Crayon.extend({
         "start_year" : 1900,
         "end_year"   : 2100,
         "date_separator" : "/"
      }, option);
      var html_opt = Crayon.extend({
         "name" : "date"
      }, html_option);
      var html = "";
      // year
      html += content_tag("select", function(){
         return Crayon.Form._generate_options(opt.start_year, opt.end_year, date.getFullYear());
      }, Crayon.extend(html_opt, {
         name: html_opt["name"] + "[year]"
      }));
      html += " " + opt.date_separator + " ";
      // month
      html += content_tag("select", function(){
         return Crayon.Form._generate_options(1,12, date.getMonth() + 1);
      }, Crayon.extend(html_opt, {
         name: html_opt["name"] + "[year]"
      }));
      html += " " + opt.date_separator + " ";
      // day
      html += content_tag("select", function(){
         return Crayon.Form._generate_options(1,31, date.getDate());
      }, Crayon.extend(html_opt, {
         name: html_opt["name"] + "[year]"
      }));
      return html;
   },

   _generate_options : function(s,t, selected){
      var candidates = "";
      for(var i=s; i<=t; i++){
         if( selected == i ){
            candidates += '<option value="' + i + '" selected="selected">' + i + '</option>';
         }else{
            candidates += '<option value="' + i + '">' + i + '</option>';
         }
      }
      return candidates;
   }
};

if( !this.do_not_import_global ){
  Crayon.extend(this, Crayon.Form);
}else{
  Crayon.extend(Crayon.Form);
}
