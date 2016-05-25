userEdit = (function() {
  var sideBarItems = [
    // {
    //   "icon": "fa-user",
    //   "link": "/users",
    //   "title": "Mostra tutti gli utenti",
    //   "active": true
    // },
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
      "active": false
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
    "edit": {
      text: "Modifica Utente",
      link: "/users/new",
      active: true
    }
  };

  var breadcrumbItems = function() {
    var url = m.route();
    var slugs = url.split("/");
    return slugs.filter(function(slug) {
      return slug != ""
    }).map(function(slug){
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

  var content = function(ctrl) {
    return [
      m('.col-xs-12 .col-sm-7 .col-md-4 .center-block', [
        m('.wrapper .padding-30', { id: ctrl.user().id }, [
          m("form", { class: 'text-center form-customized' }, [
            m.component(textField, { type: 'text', placeholder: 'Nome', value: ctrl.user().first_name, id: 'name' }),
            m.component(textField, { type: 'text', placeholder: 'Cognome', value: ctrl.user().last_name, id: 'surname' }),
            m.component(textField, { type: 'email', placeholder: 'Username', value: ctrl.user().username, id: 'username' }),
            m.component(textField, { type: 'email', placeholder: 'Email', value: ctrl.user().email, id: 'email' }),
            // m.component(textField, { type: 'password', placeholder: 'Password', id: 'password' }),
            // m.component(textField, { type: 'password', placeholder: 'Confirm Password', id: 'confirm-password' }),
            // m("select", { class: 'form-control'}, [
            //   m("option", "Amministratore"),
            //   m("option", "Dipendete")
            // ]),
            m("button[type=submit]", {
              class: 'btn btn-success btn-lg'
            }, "Modifica Utente" )
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
      ctrl.user = m.request({
        method: "GET",
        url: Bracco.baseUrl + "api/users/" + m.route.param("userId"),
        unwrapSuccess: function(response) {
          return response.data;
        },
        unwrapError: function(response) {
          return response.error;
        }
      });
    },
    view: mixinLayout(layout2, topNav, sidebarNav, breadcrumbBar, content)
  };

})();
