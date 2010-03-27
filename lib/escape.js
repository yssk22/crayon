/**
 * Escapes html special charactors.
 */
function html_escape(s){
    return s.toString().replace(/&/g, "&amp;")
      .replace(/\"/g, "&quot;")
      .replace(/\'/g, "&#039;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
};
exports.html_escape = html_escape;
exports.h = html_escape;
/**
 * Escapes json special charactors.
 */
function json_escape(s){
   return s.toString().replace(/&/g, "\u0026")
      .replace(/</g, "\u003C")
      .replace(/>/g, "\u003E");
}
exports.json_excape = json_escape;
exports.j = json_escape;
