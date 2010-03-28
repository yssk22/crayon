var m = require('vendor/crayon/vendor/showdown/compressed/showdown');
/**
* @class
* @namespace Provides text helper utilities.
* @requires vendor/showdown/compressed/showdown.js
*/
var markdown_converter = new m.Showdown.converter();
function markdown(text){
   return markdown_converter.makeHtml(text || "");
};
exports.markdown = markdown;

var cycle_current = 0;
function cycle(){
   var i = cycle_current % arguments.length;
   cycle_current += 1;
   return arguments[i];
};
exports.cycle = cycle;

function clearCycle(){
   cycle_current = 0;
}
exports.clearCycle = clearCycle;

