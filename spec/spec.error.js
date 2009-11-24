JSpec.describe("errors", function(){
   describe("render_error", function(){
      it("should returns json string by default", function(){
         var rendered = render_error(NOT_FOUND);
         expect(rendered.code).should(be, 404);
         expect(rendered.body).should(be, toJSON(NOT_FOUND));
      });

      it("should override reason value with the option key 'reason'", function(){
         var rendered = render_error(NOT_FOUND, {reason: "some reasons"});
         expect(rendered.code).should(be, 404);
         expect(rendered.body).should(be, toJSON({
            error : NOT_FOUND.error,
            code: NOT_FOUND.code,
            reason: "some reasons"
         }));
      });
      it("should returns html string according to the format option", function(){
         var rendered = render_error(NOT_FOUND, {format: "html"});
         expect(rendered.code).should(be, 404);
         expect(rendered.body).should(be,
                                      "<html><title>"
                                      + NOT_FOUND.error
                                      + "</title><body><p>"
                                      + NOT_FOUND.reason
                                      + "<p></body></html>");
      });
      it("should use user specified templates as response body", function(){
         var rendered = render_error(NOT_FOUND, {template: "foo:<%= error.code %>"});
         expect(rendered.code).should(be, 404);
         expect(rendered.body).should(be, "foo:404");
         // with specifying bindings
         var rendered = render_error(NOT_FOUND, {template: "foo:<%= error.code %>:<%= a %>",
                                                 bindings: {a: "bar"}});
         expect(rendered.code).should(be, 404);
         expect(rendered.body).should(be, "foo:404:bar");
      });
   });
});