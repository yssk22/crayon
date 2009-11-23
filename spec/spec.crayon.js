JSpec.describe("Crayon",  function(){
  describe("extractOptions", function(){
    before_each(function(){
      f = function(){
        return Crayon.extractOptions.apply(this, arguments);
      };
    });
    it("should return empty args and null option on no arguments", function(){
      var ret = f();
      expect(ret.args).should(eql, []);
      expect(ret.options).should(be, null);
    });
    it("should return null option on no options", function(){
      var ret = f(1,2,3);
      expect(ret.args).should(eql, [1,2,3]);
      expect(ret.options).should(be, null);
    });
    it("should return object on some options", function(){
      var ret = f(1,2,3, {opt1: "a"});
      expect(ret.args).should(eql, [1,2,3]);
      expect(ret.options).should(eql, {opt1: "a"});
    });
  });
});
