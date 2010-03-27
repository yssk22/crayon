JSpec.describe("escape",  function(){
   before_each(function(){
      m = require('lib/escape.js');
   });

   describe("html_escape", function(){
      it("should escape '\"'", function(){
         var escaped = m.h('a="a"');
         expect(escaped).should(be, 'a=&quot;a&quot;');
      });

      it("should escape \"'\" ", function(){
         var escaped = m.h('a=\'a\'');
         expect(escaped).should(be, 'a=&#039;a&#039;');
      });

      it("should escape '<'", function(){
         var escaped = m.h('a<a<');
         expect(escaped).should(be, 'a&lt;a&lt;');
      });

      it("should escape '>'", function(){
         var escaped = m.h('a>a>');
         expect(escaped).should(be, 'a&gt;a&gt;');
      });
   });

   describe("json_escape", function(){
      it("should escape '>'", function(){
         var escaped = m.j('a>a>');
         expect(escaped).should(be, 'a\u003Ea\u003E');
      });

      it("should escape '<'", function(){
         var escaped = m.j('a<a<');
         expect(escaped).should(be, 'a\u003Ca\u003C');
      });

      it("should escape '&", function(){
         var escaped = m.j('a&a&');
         expect(escaped).should(be, 'a\u0026a\u0026');
      });
   });
});
