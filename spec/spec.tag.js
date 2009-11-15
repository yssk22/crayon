JSpec.describe("tag",  function(){
  describe("tag", function(){
    it("should return a tag string", function(){
      expect(tag("br")).should(be, "<br/>");
    });
    it("should return a tag with attribtues", function(){
      expect(tag("img", {src: "a.png"})).should(be, '<img src="a.png"/>');
      expect(tag("img", {src: "open & a.png"})).should(be, '<img src="open &amp; a.png"/>');
    });
    it("should return a open tag with attribtues", function(){
      expect(tag("p", {"class": "highlight"}, true)).should(be, '<p class="highlight">');
    });
    it("should return a open tag with attribtues", function(){
      expect(tag("img", {"src": "open &amp; a.png"}, false, false)).should(be, '<img src="open &amp; a.png"/>');
    });
  });

  describe("content_tag", function(){
    it("should receive a string content", function(){
      expect(content_tag("p", "foo")).should(be, "<p>foo</p>");
      expect(content_tag("p", "foo", {"class": "highlight"}))
        .should(be, '<p class="highlight">foo</p>');
      expect(content_tag("p", "foo", {"class": "&amp;"}, false))
        .should(be, '<p class="&amp;">foo</p>');
    });

    it("should receive a functional content", function(){
      var f = function(){return "foo";};
      expect(content_tag("p", f))
        .should(be, "<p>foo</p>");
      expect(content_tag("p", f, {"class": "highlight"}))
        .should(be, '<p class="highlight">foo</p>');
      expect(content_tag("p", f, {"class": "&amp;"}, false))
        .should(be, '<p class="&amp;">foo</p>');
    });
  });
});