userEdit = (function() {

  // var breadcrumbSlugTranslations = {
  //   "users": {
  //     text: "Utenti",
  //     link: "/users",
  //     active: false
  //   },
  //   "edit": {
  //     text: "Modifica Utente",
  //     link: "/users/new",
  //     active: true
  //   }
  // };
  //
  // var breadcrumbItems = function() {
  //   var url = m.route();
  //   var slugs = url.split("/");
  //   return slugs.map(function(slug){
  //     return breadcrumbSlugTranslations[slug];
  //   }).filter(function(slug) {
  //     if(slug != undefined) {
  //       return slug;
  //     };
  //   });
  // };
  //
  // var breadcrumbBar = function() {
  //   return [
  //     m('ol', { class: 'breadcrumb' },
  //       breadcrumb(breadcrumbItems())
  //     )
  //   ];
  // };

  var tinyButtons = function(user) {
    return [
      {
        "icon": "fa-archive",
        "title": "Archivia",
        // "action": this.archive,
        "btnClass": "btn-warning"
      },
      {
        "icon": "fa-trash-o",
        "title": "Elimina",
        // "action": this.delete,
        "btnClass": "btn-danger"
      }
    ];
  }

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
            m("button[type=submit]", {
              class: 'btn btn-success btn-lg'
            }, "Modifica Utente" )
          ])
        ])
      ]),
      m.component(tinyNav, { buttons: tinyButtons(ctrl.user()) })
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
