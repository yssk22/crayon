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

JSpec.describe("form",  function(){
   describe("select_date", function(){
      it("should three select tags with no options", function(){
         var result = select_date(null).split("\n");
         // expect(result[0]).should(be,
         //                         '<select name="date-year">' +
         //                         '<option value="1900">1900</option>' +
         //                         '<option value="....">....</option>' +
         //                         '<option value="2100">2100</option>' +
         //                         '</select>');
         expect(result[1]).should(be,"/");
         expect(result[2]).should(be,
                                  '<select name="date-month">' +
                                  MONTH_OPTIONS +
                                  '</select>');
         expect(result[3]).should(be,"/");
         expect(result[4]).should(be,
                                  '<select name="date-day">' +
                                  DAY_OPTIONS +
                                  '</select>');

      });

      it("should three select tags with specified year range.", function(){
         var result = select_date(null, {
            start_year: 2000,
            end_year: 2001
         }).split("\n");
         expect(result[0]).should(be,
                                  '<select name="date-year">' +
                                  '<option value="2000">2000</option>' +
                                  '<option value="2001">2001</option>' +
                                  '</select>');
         expect(result[1]).should(be,"/");
         expect(result[2]).should(be,
                                  '<select name="date-month">' +
                                  MONTH_OPTIONS +
                                  '</select>');
         expect(result[3]).should(be,"/");
         expect(result[4]).should(be,
                                  '<select name="date-day">' +
                                  DAY_OPTIONS +
                                  '</select>');
      });
      it("should three select tags with specified separator.", function(){
         var result = select_date(null, {
            date_separator : "-"
         }).split("\n");
         expect(result[1]).should(be,"-");
         expect(result[3]).should(be,"-");
      });

      it("should three select tags with specified separator.", function(){
         var result = select_date(null, {
            date_separator : "-"
         }).split("\n");
         expect(result[1]).should(be,"-");
         expect(result[3]).should(be,"-");
      });

      it("should three select tags with the date selected.", function(){
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

      it("should three select tags with modified names.", function(){
         var result = select_date(new Date("1940/06/05"), {
         }, {
            "name" : "foo"
         }).split("\n");
         expect(result[0]).should(match,'<select name="foo-year">');
         expect(result[2]).should(match,'<select name="foo-month">');
         expect(result[4]).should(match,'<select name="foo-day">');
      });
});
});