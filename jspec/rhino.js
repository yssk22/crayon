// load('/Library/Ruby/Gems/1.8/gems/jspec-2.11.12/lib/jspec.js');
load("spec/jspec.js");
load("spec/couchdb-server-main.js");

// overwrite jspec matcher to support Crayon core extensions
JSpec.addMatchers({
   match : "toString.call(actual) == '[object String]' ? actual.match(expected) : false"
});

JSpec
  .exec('spec/spec.crayon.js')
  .exec('spec/spec.escape.js')
  .exec('spec/spec.template.js')
  .exec('spec/spec.text.js')
//  .exec('spec/spec.tag.js')
//  .exec('spec/spec.error.js')
//  .exec('spec/spec.form.js')
  .run({ formatter: JSpec.formatters.Terminal })
  .report();