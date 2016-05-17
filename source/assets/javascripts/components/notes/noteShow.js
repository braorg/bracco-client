noteShow = (function() {
  var sideBarItems = [
    {
      "icon": "fa-file-text-o",
      "link": "/notes",
      "title": "Mostra lista delle note",
      "active": false
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
      "active": false
    },
    {
      "link": "/notes/new",
      "text": "Titolo della nota",
      "active": true
    }
  ];
  var content = function(ctrl) {
    return [
      m(".col-sm-10 .col-md-8 .center-block", [
        m(".wrapper", { id: ctrl.note.id }, [
          m(".padding-30", [
            m("h3", { class: "no-margin-top decorator" }, ctrl.note.title),
            m("p", { class: "no-margin-bottom decorator" }, ctrl.note.description)
          ]),
          m(".bottom-band padding-15", [
            m(".row", [
              m(".col-md-6", "Data di creazione: " + ctrl.note.createdAt),
              m(".col-md-6", "Data Ultima modifica: " + ctrl.note.updatedAt)
            ])
          ])
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
      ctrl.note = {
        id: m.route.param("noteId"),
        title: "Title",
        description: "description",
        createdAt: "23 Luglio 2015",
        updatedAt: "24 Luglio 2015"
      };
    },
    view: mixinLayout(layout2, topNav, sidebarNav, breadcrumbBar, content)
  };

})();
