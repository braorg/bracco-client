userForm = (function() {
  var sideBarItems = [
    {
      "icon": "fa-user-plus",
      "link": "/?/users/new",
      "active": true
    },
    {
      "icon": "fa-users",
      "link": "/?/users",
      "active": false
    },
    {
      "icon": "fa-archive",
      "link": "/?/users/archive",
      "active": false
    }
  ];
  var content = function() {
    return [
      m('.col-xs-12 .col-sm-7 .col-md-4 .center-block', [
        m('.wrapper .padding-30', [
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
        ])
      ])
		];
  };

  var sidebarNav = function() {
    return [
      m('ul', { class: 'nav nav-pills nav-stacked sidebar-nav' },
        sideBarItems.map(sideBarItem)
      )
    ];
  };

  return {
    controller: function(){
      var ctrl = this;
    },
    view: mixinLayout(layout2, topNav, sidebarNav, content)
  };

})();
