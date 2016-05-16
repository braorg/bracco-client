rubric = (function() {
  var sideBarItems = [
    {
      "icon": "fa-users",
      "link": "/rubric",
      "title": "Mostra tutti i Contatti",
      "active": true
    },
    {
      "icon": "fa-user-plus",
      "link": "/rubric/new",
      "title": "Aggiungi Contatto",
      "active": false
    },
    {
      "icon": "fa-archive",
      "link": "/rubric/archive",
      "title": "Mostra Contatti in archivio",
      "active": false
    }
  ];
  var breadcrumbItems = [
    {
      "link": "/rubric",
      "text": "Rubric",
      "active": true
    }
  ];
  var buttonsItems = [
    {
      "icon": "fa-eye",
      "title": "Mostra dettagli",
      "link": "/rubric/view-123",
      "btnClass": "btn-info"
    },
    {
      "icon": "fa-pencil",
      "title": "Modifica",
      "link": "/rubric/modify-123",
      "btnClass": "btn-info"
    },
    {
      "icon": "fa-archive",
      "title": "Archivia",
      "link": "/rubric/archive-123",
      "btnClass": "btn-warning"
    },
    {
      "icon": "fa-trash-o",
      "title": "Elimina",
      "link": "/rubric/delete-123",
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
