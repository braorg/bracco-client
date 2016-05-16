rubricForm = (function() {
  var sideBarItems = [
    {
      "icon": "fa-user-plus",
      "link": "/?/rubric/new",
      "title": "Aggiungi Contatto",
      "active": true
    },
    {
      "icon": "fa-users",
      "link": "/?/rubric",
       "title": "Mostra Contatti della Rubrica",
      "active": false
    },
    {
      "icon": "fa-archive",
      "link": "/?/rubric/archive",
      "title": "Mostra Contatti in archivio",
      "active": false
    }
  ];
  var content = function() {
    return [
      m('.col-xs-12 .col-sm-7 .col-md-4 .center-block', [
        m('.wrapper .padding-30', [
          m("form", { class: 'text-center form-customized' }, [
            m.component(textField, { type: 'text', placeholder: 'Nome', id: 'name' }),
            m.component(textField, { type: 'text', placeholder: 'Cognome', id: 'surname' }),
            m.component(textField, { type: 'email', placeholder: 'Email', id: 'email' }),
            m.component(textField, { type: 'tel', placeholder: 'Tel. Casa', id: 'home-phone' }),
            m.component(textField, { type: 'tel', placeholder: 'Tel. Ufficio', id: 'office-phone' }),
            m.component(textField, { type: 'tel', placeholder: 'Cellulare', id: 'cell-phone' }),
            m.component(textField, { type: 'tel', placeholder: 'Fax', id: 'fax' }),
            m("button[type=submit]", {
              class: 'btn btn-success btn-lg'
            }, "Crea Contatto" )
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
