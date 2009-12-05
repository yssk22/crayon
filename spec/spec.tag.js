JSpec.describe("tag",  function(){
  describe("tag", function(){
    it("should return a tag string", function(){
      expect(tag("br")).should(eql, "<br/>");
    });
    it("should return a tag with attribtues", function(){
      expect(tag("img", {src: "a.png"})).should(eql, '<img src="a.png"/>');
      expect(tag("img", {src: "open & a.png"})).should(eql, '<img src="open &amp; a.png"/>');
    });
    it("should return a open tag with attribtues", function(){
      expect(tag("p", {"class": "highlight"}, true)).should(eql, '<p class="highlight">');
    });
    it("should return a open tag with attribtues", function(){
      expect(tag("img", {"src": "open &amp; a.png"}, false, false)).should(eql, '<img src="open &amp; a.png"/>');
    });
  });

  describe("content_tag", function(){
    it("should receive a string content", function(){
      expect(content_tag("p", "foo")).should(eql, "<p>foo</p>");
      expect(content_tag("p", "foo", {"class": "highlight"}))
        .should(eql, '<p class="highlight">foo</p>');
      expect(content_tag("p", "foo", {"class": "&amp;"}, false))
        .should(eql, '<p class="&amp;">foo</p>');
    });

    it("should receive a functional content", function(){
      var f = function(){return "foo";};
      expect(content_tag("p", f))
        .should(eql, "<p>foo</p>");
      expect(content_tag("p", f, {"class": "highlight"}))
        .should(eql, '<p class="highlight">foo</p>');
      expect(content_tag("p", f, {"class": "&amp;"}, false))
        .should(eql, '<p class="&amp;">foo</p>');
    });
  });
});