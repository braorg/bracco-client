taskForm = (function() {
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
      "active": true
    },
    {
      "icon": "fa-archive",
      "link": "/?/task/archive",
      "title": "Mostra Task in archivio",
      "active": false
    }
  ];
  var breadcrumbItems = [
    {
      "link": "/?/task",
      "text": "Task",
      "active": false
    },
    {
      "link": "/?/task/new",
      "text": "Crea Task",
      "active": true
    }
  ];
  var content = function() {
    return [
      m(".col-sm-10 .col-md-8 .center-block", [
        m(".wrapper .padding-30", [
          m("form", { class: 'text-center form-customized' }, [
            m(".row", [
              m(".col-sm-6", [
                m(".input-group", [
                  m("span", { class: 'input-group-addon', id: 'sizing-addon1' }, [
                    m("i", { class: 'fa fa-upload', 'aria-hidden': 'true' })
                  ]),
                  m.component(textField, { type: 'text', placeholder: 'Mittente', id: '' }),
                ])
              ]),
              m(".col-sm-6", [
                m("select", { class: 'form-control' }, [
                  m("option", "Roberto Petrucci"),
                  m("option", "Roberto Petrucci"),
                  m("option", "Roberto Petrucci"),
                  m("option", "Roberto Petrucci")
                ])
              ])
            ]),
            m(".form-group", [
              m.component(textField, { type: 'text', placeholder: 'Titolo', id: '' }),
            ]),
            m(".form-group", [
              m("textarea", { rows: '7', class: 'form-control', placeholder: 'Descrizione' })
            ]),
            m(".row", [
              m(".col-sm-6", [
                m(".input-group", [
                  m("span", { class: 'input-group-addon', id: 'sizing-addon1' }, [
                    m("i", { class: 'fa fa-paperclip', 'aria-hidden': 'true' })
                  ]),
                  m.component(textField, { type: 'file', placeholder: 'Allegato', id: '' }),
                ])
              ]),
              m(".col-sm-6", [
                m(".input-group", [
                  m("span", { class: 'input-group-addon', id: 'sizing-addon1' }, [
                    m("i", { class: 'fa fa-calendar', 'aria-hidden': 'true' })
                  ]),
                  m.component(textField, { type: 'date', placeholder: 'Scadenza', id: '' }),
                ])
              ])
            ]),
            m("button[type=submit]", {
              class: 'btn btn-success btn-lg'
            }, "Crea Task" )
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
        // breadcrumbItems.map(breadcrumb)
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
