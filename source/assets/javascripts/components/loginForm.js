loginForm = (function() {
  var content = function() {
    return [
      m('.col-xs-12 .col-sm-7 .col-md-4 .center-block', [
        m('.wrapper .padding-30', [
          m("form", { class: 'text-center form-customized' }, [
            m.component(textField, { type: 'email', placeholder: 'Username', id: 'email' }),
            m.component(textField, { type: 'password', placeholder: 'Password', id: 'password' }),
            m("button[type=submit]", {
              class: 'btn btn-success btn-lg'
            }, "Login" )
          ])
        ])
      ])
		];
  };

  return {
    controller: function(){
      var ctrl = this;
    },
    view: mixinLayout(layout, topNav, sidebarNav, content)
  };
})();
