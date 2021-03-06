MONTH_OPTIONS = '<option value="1">1</option>' +
   '<option value="2">2</option>' +
   '<option value="3">3</option>' +
   '<option value="4">4</option>' +
   '<option value="5">5</option>' +
   '<option value="6">6</option>' +
   '<option value="7">7</option>' +
   '<option value="8">8</option>' +
   '<option value="9">9</option>' +
   '<option value="10">10</option>' +
   '<option value="11">11</option>' +
   '<option value="12">12</option>';

DAY_OPTIONS = '<option value="1">1</option>' +
   '<option value="2">2</option>' +
   '<option value="3">3</option>' +
   '<option value="4">4</option>' +
   '<option value="5">5</option>' +
   '<option value="6">6</option>' +
   '<option value="7">7</option>' +
   '<option value="8">8</option>' +
   '<option value="9">9</option>' +
   '<option value="10">10</option>' +
   '<option value="11">11</option>' +
   '<option value="12">12</option>' +
   '<option value="13">13</option>' +
   '<option value="14">14</option>' +
   '<option value="15">15</option>' +
   '<option value="16">16</option>' +
   '<option value="17">17</option>' +
   '<option value="18">18</option>' +
   '<option value="19">19</option>' +
   '<option value="20">20</option>' +
   '<option value="21">21</option>' +
   '<option value="22">22</option>' +
   '<option value="23">23</option>' +
   '<option value="24">24</option>' +
   '<option value="25">25</option>' +
   '<option value="26">26</option>' +
   '<option value="27">27</option>' +
   '<option value="28">28</option>' +
   '<option value="29">29</option>' +
   '<option value="30">30</option>' +
   '<option value="31">31</option>';

FORM_DOC = {
   a: {
      b: {
         c: "foo"
      }
   }
};

JSpec.describe("form",  function(){
   describe("check_box", function(){
      it("should return checked tag.", function(){
         var result = check_box(FORM_DOC, "a-b-c", {}, "foo", "bar").split("\n");
         expect(result[0]).should(match, /type="checkbox"/);
         expect(result[0]).should(match, /name="a-b-c"/);
         expect(result[0]).should(match, /id="a-b-c"/);
         expect(result[0]).should(match, /value="&quot;foo&quot;"/);
         expect(result[0]).should(match, /checked="checked"/);
      });
      it("should return unchecked tag.", function(){
         var result = check_box(FORM_DOC, "e", {}, "foo", "bar").split("\n");
         expect(result[0]).should(match, /type="checkbox"/);
         expect(result[0]).should(match, /name="e"/);
         expect(result[0]).should(match, /id="e"/);
         expect(result[0]).should(match, /value="&quot;foo&quot;"/);
         expect(/checked/.test(result[0])).should(be_false);
      });
   });

   describe("radio", function(){
      it("should return checked tag.", function(){
         var result = radio_button(FORM_DOC, "a-b-c", "foo");
         expect(result).should(match, /type="radio"/);
         expect(result).should(match, /name="a-b-c"/);
         expect(result).should(match, /id="a-b-c"/);
         expect(result).should(match, /value="&quot;foo&quot;"/);
         expect(result).should(match, /checked="checked"/);
      });
      it("should return unchecked tag.", function(){
         var result = radio_button(FORM_DOC, "a-b-c", "bar");
         expect(result).should(match, /type="radio"/);
         expect(result).should(match, /name="a-b-c"/);
         expect(result).should(match, /id="a-b-c"/);
         expect(result).should(match, /value="&quot;bar&quot;"/);
         expect(/checked/.test(result)).should(be_false);
      });
   });


   describe("text_field", function(){
      it("should return input tag bound to doc.a.b.c", function(){
         var result = text_field(FORM_DOC, "a-b-c");
         expect(result).should(match, /type="text"/);
         expect(result).should(match, /name="a-b-c"/);
         expect(result).should(match, /id="a-b-c"/);
         expect(result).should(match, /value="foo"/);
      });
      it("should return input tag with the empty value if doc is undefined.", function(){
         var result = text_field(null, "a-b-c");
         expect(result).should(match, /value=""/);
         result = text_field(undefined, "a-b-c");
         expect(result).should(match, /value=""/);
      });
   });

   describe("text_area", function(){
      it("should return textarea tag bound to doc.a.b.c", function(){
         var result = text_area(FORM_DOC, "a-b-c");
         expect(result).should(match, /name="a-b-c"/);
         expect(result).should(match, /id="a-b-c"/);
         expect(result).should(match, /\>foo\<\/textarea\>/);
      });
   });


   describe("date_select", function(){
      it("should return select tags bound to doc.a.b.c", function(){
         var doc = {a: {b: {c: "2009/08/07"}}};
         var result = date_select(doc, "a-b-c").split("\n");
         expect(result[0]).should(match, /value="2009" selected="selected"/);
         expect(result[2]).should(match, /value="8" selected="selected"/);
         expect(result[4]).should(match, /value="7" selected="selected"/);
      });
   });

   describe("select_date", function(){
      it("should return three select tags with no options", function(){
         var result = select_date(null).split("\n");
         // expect(result[0]).should(be,
         //                         '<select name="date-year">' +
         //                         '<option value="1900">1900</option>' +
         //                         '<option value="....">....</option>' +
         //                         '<option value="2100">2100</option>' +
         //                         '</select>');
         expect(result[1]).should(be,"/");
         expect(result[2]).should(be,
                                  '<select name="date-month" crayon_type="date_select_month">' +
                                  MONTH_OPTIONS +
                                  '</select>');
         expect(result[3]).should(be,"/");
         expect(result[4]).should(be,
                                  '<select name="date-day" crayon_type="date_select_day">' +
                                  DAY_OPTIONS +
                                  '</select>');

      });

      it("should return three select tags with specified year range.", function(){
         var result = select_date(null, {
            start_year: 2000,
            end_year: 2001
         }).split("\n");
         expect(result[0]).should(be,
                                  '<select name="date-year" crayon_type="date_select_year">' +
                                  '<option value="2000">2000</option>' +
                                  '<option value="2001">2001</option>' +
                                  '</select>');
         expect(result[1]).should(be,"/");
         expect(result[2]).should(be,
                                  '<select name="date-month" crayon_type="date_select_month">' +
                                  MONTH_OPTIONS +
                                  '</select>');
         expect(result[3]).should(be,"/");
         expect(result[4]).should(be,
                                  '<select name="date-day" crayon_type="date_select_day">' +
                                  DAY_OPTIONS +
                                  '</select>');
      });
      it("should return three select tags with specified separator.", function(){
         var result = select_date(null, {
            date_separator : "-"
         }).split("\n");
         expect(result[1]).should(be,"-");
         expect(result[3]).should(be,"-");
      });

      it("should return three select tags with specified separator.", function(){
         var result = select_date(null, {
            date_separator : "-"
         }).split("\n");
         expect(result[1]).should(be,"-");
         expect(result[3]).should(be,"-");
      });

      it("should return three select tags with the date selected.", function(){
         var result = select_date(new Date("1940/06/05"), {
         }).split("\n");
         expect(result[0]).should(match, /value="1940" selected="selected"/);
         expect(result[2]).should(match, /value="6" selected="selected"/);
         expect(result[4]).should(match, /value="5" selected="selected"/);
      });

      it("should three select tags including blank options.", function(){
         var result = select_date(new Date("1940/06/05"), {
            include_blank : true
         }).split("\n");
         expect(result[0]).should(match, /value=""/);
         expect(result[2]).should(match, /value=""/);
         expect(result[4]).should(match, /value=""/);
      });

      it("should return three select tags with modified names.", function(){
         var result = select_date(new Date("1940/06/05"), {
         }, {
            "name" : "foo"
         }).split("\n");
         expect(result[0]).should(match,/<select name="foo-year" crayon_type="date_select_year">/);
         expect(result[2]).should(match,/<select name="foo-month" crayon_type="date_select_month">/);
         expect(result[4]).should(match,/<select name="foo-day" crayon_type="date_select_day">/);
      });
   });
});