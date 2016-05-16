users = (function() {
  var sideBarItems = [
    {
      "icon": "fa-users",
      "link": "/users",
      "title": "Mostra tutti gli utenti",
      "active": true
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
  var breadcrumbItems = [
    {
      "link": "/users",
      "text": "Users",
      "active": true
    }
  ];
  var buttonsItems = [
    {
      "icon": "fa-eye",
      "title": "Mostra dettagli",
      "link": "/users/view-123",
      "btnClass": "btn-info"
    },
    {
      "icon": "fa-pencil",
      "title": "Modifica",
      "link": "/users/modify-123",
      "btnClass": "btn-info"
    },
    {
      "icon": "fa-archive",
      "title": "Archivia",
      "link": "/users/archive-123",
      "btnClass": "btn-warning"
    },
    {
      "icon": "fa-trash-o",
      "title": "Elimina",
      "link": "/users/delete-123",
      "btnClass": "btn-danger"
    }
  ];
  var content = function() {
    return [
      m(m.component(toolBar)),
      m(".items-list", [
        m('.wrapper .padding-10 .items-list__row', [
          m(".items-list__info", [
            m("span", { class: "column" }, "Ilaria Di Rosa"),
            m("span", { class: "column" }, "iladiro"),
            m("span", { class: "column" }, "angels88"),
            m("span", { class: "column" }, "dirosa.ilaria@gmail.com")
          ]),
          m(".items-list__buttons", buttonsItems.map(button))
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

  var breadcrumbBar = function() {
    return [
      m('ol', { class: 'breadcrumb' },
        breadcrumb(breadcrumbItems)
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
