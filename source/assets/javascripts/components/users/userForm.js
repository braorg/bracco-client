userForm = (function() {

  var content = function(ctrl) {
    return [
      m('.col-xs-12 .col-sm-7 .col-md-4 .center-block', [
        m('.wrapper .padding-30', [
          m("form", { class: 'text-center form-customized' }, [
            m(textField, {
              type: 'text',
              placeholder: 'Nome',
              id: 'first_name',
              name: 'first_name',
              oninput: m.withAttr("value", User.model.first_name)
            }),
            m(textField, {
              type: 'text',
              placeholder: 'Cognome',
              id: 'last_name',
              name: 'last_name',
              oninput: m.withAttr("value", User.model.last_name)
            }),
            m(textField, {
              type: 'text',
              placeholder: 'Username',
              id: 'username',
              name: 'username',
              oninput: m.withAttr("value", User.model.username)
            }),
            m(textField, {
              type: 'email',
              placeholder: 'Email',
              id: 'email',
              name: 'email',
              oninput: m.withAttr("value", User.model.email)
            }),
            m(textField, {
              type: 'password',
              placeholder: 'Password',
              id: 'password',
              name: 'password',
              oninput: m.withAttr("value", User.model.password)
            }),
            m(textField, {
              type: 'password',
              placeholder: 'Conferma Password',
              id: 'confirm_password',
              name: 'confirm_password',
              oninput: m.withAttr("value", User.model.confirm_password)
            }),
            m("select", {
              class: 'form-control',
              onchange: m.withAttr("value", User.model.profile_id)
            }, [
              m("option", { value : '1', selected: true }, "Amministratore"),
              m("option", { value : '2' }, "Utente")
            ]),
            m("button[type=button]", {
              class: 'btn btn-success btn-lg',
              onclick: ctrl.create
            }, "Crea Utente" )
          ])
        ])
      ])
		];
  };

  return {
    controller: function(){
      var ctrl = this;
      ctrl.create = function(){
        User.create().then(function() {
            m.route("/users");
        })
        // User.create().then(function() {
        //   update.bind(this);
        // })
      };
    },
    view: mixinLayout(layout2, topNav, sidebarNav, breadcrumbBar, content)
  };

})();
