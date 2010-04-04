// overwrite jspec matcher to support Crayon core extensions
load("spec/jspec.js");
load("spec/couchdb-server-main.js");

(function(){
   JSpec.include({
      name: 'JUnit',
      formatters: {
         JUnitXml: function(results, options) {
            function e(s){
               return s.toString().replace(/&/g, "&amp;")
                  .replace(/\"/g, "&quot;")
                  .replace(/\'/g, "&#039;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;");
            }
            var w = new java.io.FileWriter('jspec.xml');
            w.write('<?xml version="1.0" encoding="UTF-8"?>\n');
            w.write('<testsuites>\n');
            JSpec.each(results.allSuites, function(suite) {
               var attribs = {
                  name: suite.description,
                  tests: suite.specs.length,
                  assertions: 0,
                  failures: 0,
                  specs: 0,
                  time: 0
               };
               var content = JSpec.inject(suite.specs, '', function(content, spec) {
                  attribs.assertions += spec.assertions.length;
                  attribs.failures += spec.passed() ? 0 : 1;
                  attribs.specs += 1;
                  attribs.time += spec.time || 0;
                  return content +'    <testcase '
                     + 'name="'+ e(spec.description) +'" '
                     + 'assertions="'+spec.assertions.length + '" '
                     + 'time="' + spec.time + '"'
                     + '/>\n';
               });
               w.write('  <testsuite');
               for (var key in attribs) {
                  w.write(' ' + key + '="' + e(attribs[key]) + '"');
               }
               w.write('>\n');
               w.write(content);
               w.write('  </testsuite>\n');
            });
            w.write('</testsuites>\n');
            w.close();
            quit(results.stats.failures);
         }
      }
   });
})();

JSpec.addMatchers({
   match : "toString.call(actual) == '[object String]' ? actual.match(expected) : false"
});

function runSuites(formatter){
   JSpec
      .exec('spec/spec.crayon.js')
      .exec('spec/spec.escape.js')
      .exec('spec/spec.template.js')
      .exec('spec/spec.text.js')
      .run({ formatter: formatter })
      .report();
}