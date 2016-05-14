var noteForm = {
  controller: function(){
    var ctrl = this;
  },
  view: function(ctrl){
    return [
			m("form", { class: 'text-center form-customized' }, [
        m.component(textField, { type: 'text', placeholder: 'Titolo', id: 'note-title' }),
        m(".form-group", [
          m("textarea", { rows: '7', class: 'form-control', placeholder: 'Descrizione' })
        ]),
        m("button[type=submit]", {
          class: 'btn btn-success btn-lg'
        }, "Crea Appunto" )
      ])
		];
  }
}

$(document).ready(function() {

  var noteBox = document.getElementById("noteForm");

  if(noteBox){
    m.module(noteBox, noteForm);
  };

})
