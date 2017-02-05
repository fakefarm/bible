describe("FormTemplate", function () {
  it("has an accompanying constructor", function () {
    var form = new Form('#submit');
    expect(typeof form).toBe('object')
  });
});
