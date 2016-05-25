UserPage.config = {
  sideBarItems: function() {
    return [
      {
        "icon": "fa-users",
        "link": "/users",
        "title": "Mostra tutti gli utenti"
      },
      {
        "icon": "fa-user-plus",
        "link": "/users/new",
        "title": "Aggiungi utente"
      },
      {
        "icon": "fa-archive",
        "link": "/users/archive",
        "title": "Mostra utenti in archivio"
      }
    ];
  },
  breadcrumbSlugTranslations: {
    "users": {
      text: "Utenti",
      link: "/users",
      active: false
    },
    "edit": {
      text: "Modifica Utente",
      link: "/users/new",
      active: false
    },
    "archive": {
      text: "Archivio",
      link: "/archive",
      active: false
    },
    "new": {
      text: "Aggiungi utente",
      link: "/users/new",
      active: false
    }
  }
}

var breadcrumbItems = function() {
  var url = m.route();
  var slugs = url.split("/");
  return slugs.map(function(slug){
    return UserPage.config.breadcrumbSlugTranslations[slug];
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

var sidebarNav = function() {
  return [
    m('ul', { class: 'nav nav-pills nav-stacked sidebar-nav' },
      UserPage.config.sideBarItems().map(
        function(item) {
          return sideBarItem(item, m.route());
        }
      )
    )
  ];
};
