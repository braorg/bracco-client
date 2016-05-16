noteForm = (function() {
  var sideBarItems = [
    {
      "icon": "fa-plus",
      "link": "notes/new",
      "title": "Aggiungi nota",
      "active": true
    },
    {
      "icon": "fa-file-text-o",
      "link": "notes",
      "title": "Mostra lista delle note",
      "active": false
    },
    {
      "icon": "fa-archive",
      "link": "notes/archive",
      "title": "Mostra note in archivio",
      "active": false
    }
  ];
  var content = function() {
    return [
      m('.col-sm-10 .col-md-8 .center-block', [
        m('.wrapper .padding-30', [
          m("form", { class: 'text-center form-customized' }, [
            m.component(textField, { type: 'text', placeholder: 'Titolo', id: 'note-title' }),
            m(".form-group", [
              m("textarea", { rows: '7', class: 'form-control', placeholder: 'Descrizione' })
            ]),
            m("button[type=submit]", {
              class: 'btn btn-success btn-lg'
            }, "Crea Appunto" )
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

  return {
    controller: function(){
      var ctrl = this;
    },
    view: mixinLayout(layout2, topNav, sidebarNav, content)
  };

})();
