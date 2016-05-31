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
      link: "/users"
    },
    // "edit": {
    //   text: "Modifica Utente",
    //   link: "/users/new"
    // },
    "archive": {
      text: "Archivio",
      link: "/users/archive"
    },
    "new": {
      text: "Aggiungi utente",
      link: "/users/new"
    }
  },
  buttons: function(id) {
    return {
      show: {
        icon: "fa-eye",
        title: "Mostra dettagli",
        link: "/users/" + id,
        btnClass: "btn-info"
      },
      edit: {
        icon: "fa-pencil",
        title: "Modifica",
        link: "/users/" + id + "/edit",
        btnClass: "btn-info"
      },
      archive: {
        icon: "fa-archive",
        title: "Archivia",
        action: "archive",
        btnClass: "btn-warning"
      },
      restores: {
        icon: "fa-reply",
        title: "Ripristina",
        action: "restores",
        btnClass: "btn-warning"
      },
      delete: {
        icon: "fa-trash-o",
        title: "Elimina",
        action: "delete",
        btnClass: "btn-danger",
        id: id
      }
    };
  }
};

var getTinies = function(user, tinyButtonKeys) {
  return tinyButtonKeys.map(function(btn) {
    return UserPage.config.buttons(user.id)[btn]
  })
};

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
      breadcrumb(breadcrumbItems(), m.route())
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
