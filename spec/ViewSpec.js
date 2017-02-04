// testing locally requires overriding chrome safety;
// normal;
// open /Applications/Google\ Chrome.app --args --allow-file-access-from-files
// Canary
// open /Applications/Google\ Chrome\ Canary.app --args --allow-file-access-from-files

describe("ViewSpec", function(){
  var template;

  beforeEach(function () {
    template = new Template('src/index.html');
  });

  it('can be instantiated', function(){
    expect(typeof template).toBe('object');
  });

  it('can be passed a path to template', function(){
    expect(template.path).toBe('src/index.html');
  });

  it("gets the template", function () {
    // _dw I need to improve how I test this ajax.
    expect(template.get()).toBe(1);
  });

  it("shows the contents", function (done) { // introduce done;

    template.get();

    setTimeout(function() { // introduce setTimeout;
      var title = $(template.data).filter('h1');
      expect($(title).hasClass('headline')).toBe(true);
      done();
    }, 0);
  });
})
