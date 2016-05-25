userForm = (function() {
  var sideBarItems = [
    {
      "icon": "fa-users",
      "link": "/users",
      "title": "Mostra tutti gli utenti",
      "active": false
    },
    {
      "icon": "fa-user-plus",
      "link": "/users/new",
      "title": "Aggiungi utente",
      "active": true
    },
    {
      "icon": "fa-archive",
      "link": "/users/archive",
      "title": "Mostra utenti in archivio",
      "active": false
    }
  ];

  var breadcrumbSlugTranslations = {
    "users": {
      text: "Utenti",
      link: "/users",
      active: false
    },
    "new": {
      text: "Aggiungi utente",
      link: "/users/new",
      active: true
    }
  };

  var breadcrumbItems = function() {
    var url = m.route();
    var slugs = url.split("/");
    return slugs.map(function(slug){
      return breadcrumbSlugTranslations[slug];
    }).filter(function(slug) {
      if(slug != undefined) {
        return slug;
      };
    });
  };

  var breadcrumbBar = function() {
    return [
      m('ol', { class: 'breadcrumb' },
        breadcrumb(breadcrumbItems())
      )
    ];
  };

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
            }, "Crea Utente" )
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
    view: mixinLayout(layout2, topNav, sidebarNav, breadcrumbBar, content)
  };

})();
