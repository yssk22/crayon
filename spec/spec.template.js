JSpec.describe("template", function(){
   before_each(function(){
      m = require('lib/template.js');
   });

   describe("render", function(){
      it("should returns string without bindings", function(){
         var text = "foobar";
         var rendered = m.render(text);
         expect(rendered).should(eql, text);
      });

      it("should returns string with bindings", function(){
         var bindings = {
            bar : "foo"
         };
         var text = "foo{{bar}}";
         var rendered = m.render(text, bindings);
         expect(rendered).should(eql, "foofoo");
      });
   });
});