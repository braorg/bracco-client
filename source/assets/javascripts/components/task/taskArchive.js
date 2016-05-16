taskArchive = (function() {
  var sideBarItems = [
    {
      "icon": "fa-ticket",
      "link": "/?/task",
      "title": "Mostra lista dei Task",
      "active": false
    },
    {
      "icon": "fa-plus",
      "link": "/?/task/new",
      "title": "Crea Task",
      "active": false
    },
    {
      "icon": "fa-archive",
      "link": "/?/task/archive",
      "title": "Mostra Task in archivio",
      "active": true
    }
  ];
  var breadcrumbItems = [
    {
      "link": "/?/task",
      "text": "Task",
      "active": false
    },
    {
      "link": "/?/task/archive",
      "text": "Archivio",
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
      "icon": "fa-reply",
      "title": "Ripristina",
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
      m("section", { class: "items-list" }, [
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
