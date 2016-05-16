notes = (function() {
  var sideBarItems = [
    {
      "icon": "fa-file-text-o",
      "link": "/notes",
      "title": "Mostra lista delle note",
      "active": true
    },
    {
      "icon": "fa-plus",
      "link": "/notes/new",
      "title": "Aggiungi nota",
      "active": false
    },
    {
      "icon": "fa-archive",
      "link": "/notes/archive",
      "title": "Mostra note in archivio",
      "active": false
    }
  ];
  var breadcrumbItems = [
    {
      "link": "/notes",
      "text": "Appunti",
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
          m(".items-list__info", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. [...]"),
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
