JSpec.describe("Crayon",  function(){
   before_each(function(){
      m = require('lib/crayon.js');
   });

   describe("extractOptions", function(){
      it("should return empty args and null option on no arguments", function(){
         var ret = m.extractOptions();
         expect(ret.args).should(eql, []);
         expect(ret.options).should(be, null);
      });
      it("should return null option on no options", function(){
         var ret = m.extractOptions(1,2,3);
         expect(ret.args).should(eql, [1,2,3]);
         expect(ret.options).should(be, null);
      });
      it("should return object on some options", function(){
         var ret = m.extractOptions(1,2,3, {opt1: "a"});
         expect(ret.args).should(eql, [1,2,3]);
         expect(ret.options).should(eql, {opt1: "a"});
      });
   });
});
