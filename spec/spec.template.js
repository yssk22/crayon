JSpec.describe("template", function(){
   before(function(){
      m = require('lib/template');
   });

   describe("render", function(){
      it("should return string without bindings", function(){
         var text = "foobar";
         var rendered = m.render(text);
         expect(rendered).should(eql, text);
      });

      it("should return string with bindings", function(){
         var bindings = {
            bar : "foo"
         };
         var text = "foo{{bar}}";
         var rendered = m.render(text, bindings);
         expect(rendered).should(eql, "foofoo");
      });

   });
});