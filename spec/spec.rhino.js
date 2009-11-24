// load('/Library/Ruby/Gems/1.8/gems/jspec-2.11.12/lib/jspec.js');
load("spec/jspec.js");
load("spec/couchdb-server-main.js");
load('vendor/ejs/ejs_production.js');
load('lib/crayon.js');
load('lib/escape.js');
load('lib/template.js');
load('lib/tag.js');
load('lib/error.js');

JSpec
  .exec('spec/spec.crayon.js')
  .exec('spec/spec.escape.js')
  .exec('spec/spec.template.js')
  .exec('spec/spec.tag.js')
  .exec('spec/spec.error.js')
  .run({ formatter: JSpec.formatters.Terminal })
  .report();