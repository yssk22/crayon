JSpec.describe("template", function(){
  describe("template", function(){
    it("should returns string without bindings", function(){
      var text = "foobar";
      var rendered = template(text);
      expect(rendered).should(be, text);
    });
    it("should returns string with bindings", function(){
      var bindings = {
        bar : "foo"
      };
      var text = "foo<%= bar %>";
      var rendered = template(text, bindings);
      expect(rendered).should(be, "foofoo");
    });

    it("should throw ReferenceError", function(){
      var text = "foo<%= bar %>";
      expect(function(){
        template(text);
      }).should(throw_error, ReferenceError);
    });
  });
});