window.Template = (function(){
  function Template(path){
    this.path = path;
    this.data = null;
  }

  Template.prototype = {
    get: get
  };

  function get() {
    $.ajax({
      url: this.path,
      success: function(data) {
        this.data = data; // how do I set data?
      }
    }).done(function(data){
      this.data = data;
      or is it here?
    });
  }

  return Template;
}());
