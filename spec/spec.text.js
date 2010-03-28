JSpec.describe("text", function(){
   before(function(){
      m = require('lib/text');
   });

   describe("cycle", function(){
      var s = m.cycle("even", "odd");
      expect(s).should(eql, "even");
      s = m.cycle("even", "odd");
      expect(s).should(eql, "odd");
      s = m.cycle("even", "odd");
      expect(s).should(eql, "even");
      s = m.cycle("even", "odd");
      expect(s).should(eql, "odd");
   });
});