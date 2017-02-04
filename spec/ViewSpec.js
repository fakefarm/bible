describe("ViewSpec", function(){
  var template;

  beforeEach(function () {
    template = new Template('src/index.html');
  });

  it('can be instantiated', function(){
    expect(typeof template).toBe('object');
  });

  it('can be passed a path to template',    function(){
    expect(template.path).toBe('src/index.html');
  });

  it("gets the template", function () {
    expect(template.get()).toBe(true);
    // _dw I need to improve how I test this ajax.
    expect(template.get()).toBe(1);
  });

  it("shows the contents", function () {
    expect(template.data).toBe("<html>");
  });
})
