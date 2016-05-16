users = (function() {
  var sideBarItems = [
    {
      "icon": "fa-user-plus",
      "link": "/?/users/new",
      "active": false
    },
    {
      "icon": "fa-users",
      "link": "/?/users",
      "active": true
    },
    {
      "icon": "fa-archive",
      "link": "/?/users/archive",
      "active": false
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
          m(".items-list__buttons", [
            m("a", { class: "btn btn-info btn-square", href: "" }, [
              m("i", { class: "fa fa-pencil", "aria-hidden": "true" })
            ]),
            m("a", { class: "btn btn-danger btn-square", href: "modify-user.html" }, [
              m("i", { class: "fa fa-trash-o", "aria-hidden": "true" })
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

  return {
    controller: function(){
      var ctrl = this;
    },
    view: mixinLayout(layout2, topNav, sidebarNav, content)
  };

})();
