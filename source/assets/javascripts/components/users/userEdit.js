userEdit = (function() {

  var tinyButtonKeys = ["archive", "delete"];

  var content = function(ctrl) {
    return [
      m('.col-xs-12 .col-sm-7 .col-md-4 .center-block', [
        m('.wrapper .padding-30', { id: ctrl.user().id }, [
          m("form", { class: 'text-center form-customized' }, [
            m.component(textField, { type: 'text', placeholder: 'Nome', value: ctrl.user().first_name, id: 'name' }),
            m.component(textField, { type: 'text', placeholder: 'Cognome', value: ctrl.user().last_name, id: 'surname' }),
            m.component(textField, { type: 'email', placeholder: 'Username', value: ctrl.user().username, id: 'username' }),
            m.component(textField, { type: 'email', placeholder: 'Email', value: ctrl.user().email, id: 'email' }),
            m.component(textField, { type: 'password', placeholder: 'Password', id: 'password' }),
            m.component(textField, { type: 'password', placeholder: 'Conferma Password', id: 'confirm_password' }),
            m("select", { class: 'form-control'}, ctrl.selected()),
            m("button[type=submit]", { class: 'btn btn-success btn-lg' }, "Modifica Utente" )
          ])
        ])
      ]),
      m.component(tinyNav, { buttons: getTinies(ctrl.user(), tinyButtonKeys), style: "verticalStyle" })
		];
  };

  return {
    controller: function(){
      var ctrl = this;
      ctrl.user = User.show(m.route.param("userId"));

      ctrl.selected = function() {
        if(ctrl.user().profile_id == "1"){
          return [
            m("option", { value: "1", selected: true }, "Amministratore"),
            m("option", { value: "2" }, "Utente semplice")
          ]
        } else {
          return [
            m("option", { value: "1" }, "Amministratore"),
            m("option", { value: "2", selected: true }, "Utente semplice")
          ]
        }
      };
    },
    view: mixinLayout(layout2, topNav, sidebarNav, breadcrumbBar, content)
  };

})();
