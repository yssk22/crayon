// depends on vendor/ejs
function template(t, b){
  return new EJS({text: t}).render(b);
}