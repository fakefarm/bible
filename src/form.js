window.Form = (function(){
  "use strict";

  function Form(id){
    this.id = id;
    attach_events(this.id);
  };

  function attach_events(id) {
    submit_event(id);
  }

  function submit_event(id){
    $(id).on('click', function(event){
      debugger;
    });
  }

  return Form;
}());
