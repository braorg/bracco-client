notesList = (function() {
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
  var content = function() {
    return [
      m(toolBar),
      // m(m.component(itemList))
      m(".items-list", [
        m(noteItem)
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
