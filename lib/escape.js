function html_escape(s){
  return s.toString().replace(/&/g, "&amp;")
    .replace(/\"/g, "&quot;")
    .replace(/\'/g, "&#039;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
var h = html_escape;

function json_escape(s){
  return s.toString().replace(/&/g, "\u0026")
    .replace(/</g, "\u003C")
    .replace(/>/g, "\u003E");
}
var j = json_escape;

