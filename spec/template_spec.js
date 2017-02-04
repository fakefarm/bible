// Testing locally
// requires overriding chrome safety;
// normal;
// open /Applications/Google\ Chrome.app --args --allow-file-access-from-files
// Canary
// open /Applications/Google\ Chrome\ Canary.app --args --allow-file-access-from-files

describe("Template", function(){
  var template;

  beforeEach(function () {
    template = new Template('src/index.html');
  });

  it('is instantiated', function(){
    expect(typeof template).toBe('object');
  });

  it('is passed a path to template', function(){
    expect(template.path).toBe('src/index.html');
  });

  it("gets Template", function () {
    // _dw I need to improve how I test this ajax.
    expect(template.get()).toBe(1);
  });

  it("stores html in .html", function (done) { // introduce done;

    template.get();

    setTimeout(function() { // introduce setTimeout;
      var title = $(template.html).filter('h1');
      expect($(title).hasClass('headline')).toBe(true);
      done();
    }, 0);
  });
})
