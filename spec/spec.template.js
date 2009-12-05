JSpec.describe("template", function(){
   describe("render", function(){
      it("should returns string without bindings", function(){
         var text = "foobar";
             var rendered = render(text);
         expect(rendered).should(eql, text);
      });
      it("should returns string with bindings", function(){
         var bindings = {
            bar : "foo"
         };
         var text = "foo<%= bar %>";
         var rendered = render(text, bindings);
         expect(rendered).should(eql, "foofoo");
      });

      it("should returns html escaped string by default", function(){
         var bindings = {
            bar : "<foo>"
         };
         var text = "foo<%= bar %>";
         var rendered = render(text, bindings);
         expect(rendered).should(eql, "foo&lt;foo&gt;");
      });

      it("should returns html string by using htmlSafe()", function(){
         var bindings = {
            bar : "<foo>"
         };
         var text = "foo<%= bar.htmlSafe() %>";
         var rendered = render(text, bindings);
         expect(rendered).should(eql, "foo<foo>");
      });

      it("should throw ReferenceError", function(){
         var text = "foo<%= bar %>";
         expect(function(){
            render(text);
         }).should(throw_error, ReferenceError);
      });
   });
});