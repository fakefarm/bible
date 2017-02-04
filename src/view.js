window.Template = (function(){
  function Template(path){
    this.path = path;
    this.data = null;
  }

  Template.prototype = {
    get: get
  };

  function get() {
    var ajax = $.ajax({
      url: this.path,
      context: this,
      success: function(data) {
        this.data = data;
      }
    });
    return ajax.readyState;
  }

  return Template;
}());
