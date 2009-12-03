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
    * Returns select tags for date selection tailored for accessing a specified attribute.
    * @param {Object} doc JSON document to bind.
    * @param {String} path JSON member path seperated by "-".
    * @param [Object] options tag attribute options.
    */
   date_select : function(doc, path, options, html_options){
      var val = Crayon.Form._getValueFromPath(doc, path);
      if( val && (!Crayon.isDate(val))) {
         val = new Date(val.toString());
         if( val == "Invalid Date"){
            val = null;
         }
      }
      var html_opt = Crayon.extend({
         name: path
      }, options);
      return select_date(val, options, html_opt);
   },

   /**
    * Returns an input tag of the "text" type tailored for accessing a specified attribute.
    * @param {Object} doc JSON document to bind.
    * @param {String} path JSON member path seperated by "-".
    * @param [Object] options tag attribute options.
    */
   text_field : function(doc, path, options){
      var val = Crayon.Form._getValueFromPath(doc, path);
      // html options
      var html_opt = Crayon.extend({
         id : path,
         name: path
      }, options);
      html_opt["type"] = "text";
      html_opt["value"] = val || "";
      return tag("input",html_opt);
   },

   /**
    * Returns an textarea tag tailored for accessing a specified attribute.
    * @param {Object} doc JSON document to bind.
    * @param {String} path JSON member path seperated by "-".
    * @param [Object] options tag attribute options.
    */
   text_area : function(doc, path, options){
      var val = Crayon.Form._getValueFromPath(doc, path);
      // html options
      var html_opt = Crayon.extend({
         id : path,
         name: path
      }, options);
      html_opt["type"] = "text";
      return content_tag("textarea", val || "", html_opt);
   },

   /**
    * Returns a set of select tags for date selection.
    * @param {String} date the default selected value.
    * @param [Object] option kev-value pairs for the date list.
    * @param [Object] html_option kev-value pairs passed to each select tag.
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
         return Crayon.Form._generateOptions(opt.start_year, opt.end_year, y, opt.include_blank);
      }, Crayon.extend({}, html_opt, {
         name: html_opt["name"] + "-year"
      }));
      html += "\n" + opt.date_separator + "\n";
      // month
      html += content_tag("select",  function(){
         var str = "";
         return Crayon.Form._generateOptions(1, 12, m, opt.include_blank);
      }, Crayon.extend({}, html_opt, {
         name: html_opt["name"] + "-month"
      }));
      html += "\n" + opt.date_separator + "\n";
      // day
      html += content_tag("select",  function(){
         var str = "";
         return Crayon.Form._generateOptions(1, 31, d, opt.include_blank);
      }, Crayon.extend({}, html_opt, {
         name: html_opt["name"] + "-day"
      }));
      return html;
   },

   _getValueFromPath: function(doc, path){
      var val;
      // value mapping
      if( doc ){
         var paths = path.split("-"); // compatible path separator for CouchApp's docForm function
         var obj = doc;
         for(var i in paths){
            obj = obj[paths[i]];
            if( obj == undefined || obj == null ){
               break;
            }
         }
         val = obj;
      }
      return val;
   },

   _generateOptions : function(s,t, selected, include_blank){
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
