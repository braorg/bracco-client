var contactForm = {
  controller: function(){
    var ctrl = this;
  },
  view: function(ctrl){
    return [
			m("form", { class: 'text-center form-customized' }, [
        m.component(textField, { type: 'text', placeholder: 'Nome', id: 'name' }),
        m.component(textField, { type: 'text', placeholder: 'Cognome', id: 'surname' }),
        m.component(textField, { type: 'email', placeholder: 'Email', id: 'email' }),
        m.component(textField, { type: 'tel', placeholder: 'Tel. Casa', id: 'home-phone' }),
        m.component(textField, { type: 'tel', placeholder: 'Tel. Ufficio', id: 'office-phone' }),
        m.component(textField, { type: 'tel', placeholder: 'Cellulare', id: 'cell-phone' }),
        m.component(textField, { type: 'tel', placeholder: 'Fax', id: 'fax' }),
        m("button[type=submit]", {
          class: 'btn btn-success btn-lg'
        }, "Crea Contatto" )
      ])
		];
  }
}

$(document).ready(function() {

  var contactBox = document.getElementById("contactForm");

  if(contactBox){
    m.module(contactBox, contactForm);
  };

})
