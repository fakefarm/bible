window.Template = (function(){
  "use strict";

  function Template(path){
    this.path = path || '';
    this.html = '';
  }

  Template.prototype = {
    get: get
  };

  function get() {
    var ajax = $.ajax({
      url: this.path,
      context: this
    });

    ajax.done(function(data){
      this.html = data;
      return data;
    })
    return ajax.readyState;
  }

  return Template;
}());
