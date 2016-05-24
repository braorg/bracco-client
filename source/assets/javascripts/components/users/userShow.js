userShow = (function() {

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
      m(".col-xs-12 .col-sm-7 .col-md-4 .center-block", [
        m(".wrapper .padding-30", { id: ctrl.user().id }, [
          m("p", { class: "no-margin-top decorator" }, ctrl.user().first_name + " " + ctrl.user().last_name),
          m("p", { class: "no-margin-top decorator" }, ctrl.user().username),
          m("p", { class: "no-margin-top decorator" }, ctrl.user().email),
          // m("p", { class: "no-margin-top decorator", "data-type": "password" }, ctrl.hiddenPsw()),
          // m("p", { class: "no-margin decorator" }, ctrl.user.profile_id),
          m("img", { src: ctrl.user().avatar_url, class: "img-responsive decorator" })
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
        url: "http://localhost:4000/api/users/" + m.route.param("userId"),
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
