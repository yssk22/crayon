// depends on lib/escape.js

function tag(name, options, open, escape){
  if( escape === undefined ){
    escape = true;
  }
  var str = "<" + name;
  if(options){
    for(var attr_name in options){
      str += " " + attr_name + '="' + (escape ? h(options[attr_name]) : options[attr_name]) + '"';
    }
  }
  return str + (open ? ">" : "/>");
}

function content_tag(name, content, options, escape){
  var str = tag(name, options, true, escape);
  str += (typeof(content) == "function") ? content() : content.toString();
  return str + "</" + name + ">";
}

