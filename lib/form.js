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
      var opt      = Crayon.extend({
         "start_year" : 1900,
         "end_year"   : 2100,
         "date_separator" : "/",
         "include_blank" : false
      }, option);
      var html_opt = Crayon.extend({
         "name" : "date"
      }, html_option);
      var html = "";
      var y,m,d;
      if( date ){
         y = date.getFullYear();
         m = date.getMonth()+1;
         d = date.getDate();
      }

      // year
      html += content_tag("select", function(){
         var str = "";
         return Crayon.Form._generate_options(opt.start_year, opt.end_year, y, opt.include_blank);
      }, Crayon.extend(html_opt, {
         name: html_opt["name"] + "-year"
      }));
      html += " " + opt.date_separator + " ";
      // month
      html += content_tag("select", function(){
         return Crayon.Form._generate_options(1,12, m, opt.include_blank);
      }, Crayon.extend(html_opt, {
         name: html_opt["name"] + "-month"
      }));
      html += " " + opt.date_separator + " ";
      // day
      html += content_tag("select", function(){
         return Crayon.Form._generate_options(1,31, d, opt.include_blank);
      }, Crayon.extend(html_opt, {
         name: html_opt["name"] + "-day"
      }));
      return html;
   },

   _generate_options : function(s,t, selected, include_blank){
      var candidates = "";
      if(include_blank){
         if( selected ){
            candidates += '<option value=""></option>';
         }else{
            candidates += '<option value="" selected="selected"></option>';
         }
      }
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
