var userForm = {
  controller: function(){
    var ctrl = this;
  },
  view: function(ctrl){
    return [
			m("form", { class: 'text-center form-customized' }, [
        m.component(textField, { type: 'text', placeholder: 'Nome', id: 'name' }),
        m.component(textField, { type: 'text', placeholder: 'Cognome', id: 'surname' }),
        m.component(textField, { type: 'email', placeholder: 'Username', id: 'username' }),
        m.component(textField, { type: 'email', placeholder: 'Email', id: 'email' }),
        m.component(textField, { type: 'password', placeholder: 'Password', id: 'password' }),
        m.component(textField, { type: 'password', placeholder: 'Confirm Password', id: 'confirm-password' }),
        m("select", { class: 'form-control'}, [
          m("option", "Amministratore"),
          m("option", "Dipendete")
        ]),
        m("button[type=submit]", {
          class: 'btn btn-success btn-lg'
        }, "Crea Account" )
      ])
		];
  }
}

$(document).ready(function() {

  var userBox = document.getElementById("userForm");

  if(userBox){
    m.module(userBox, userForm);
  };

})
