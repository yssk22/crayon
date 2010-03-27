var m = require('vendor/mustache/mustache.js');
/**
 *
 * @return the text using the <tt>t</tt> template with <tt>b</tt> bindings.
 */
function render(t, b){
   return m.Mustache.to_html(t, b || {});
}
exports.render = render;