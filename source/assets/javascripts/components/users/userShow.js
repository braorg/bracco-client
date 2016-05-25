userShow = (function() {

  // var breadcrumbSlugTranslations = {
  //   "users": {
  //     text: "Utenti",
  //     link: "/users",
  //     active: false
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
        "icon": "fa-pencil",
        "title": "Modifica",
        "link": "/users/" + user.id + "/edit",
        "btnClass": "btn-info"
      },
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
      m(".col-xs-12 .col-sm-7 .col-md-4 .center-block", [
        m(".wrapper .padding-30", { id: ctrl.user().id }, [
          m("p", { class: "no-margin-top decorator" }, ctrl.user().first_name + " " + ctrl.user().last_name),
          m("p", { class: "no-margin-top decorator" }, ctrl.user().username),
          m("p", { class: "no-margin-top decorator" }, ctrl.user().email),
          m("p", { class: "no-margin-top decorator" }, ( (ctrl.user().profile_id == "1") ? "Amministratore" : "Utente semplice") ),
          m("img", { src: Bracco.baseUrl + ctrl.user().avatar_url, class: "img-responsive decorator" })
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

      ctrl.hiddenPsw = function(){
        return ctrl.user.password.replace(/./g, "•");
      }
    },
    view: mixinLayout(layout2, topNav, sidebarNav, breadcrumbBar, content)
  };

})();
