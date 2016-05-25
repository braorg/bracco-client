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
  }
}

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
