var sidebarNav = {
  controller: function() {},
  view: function(ctrl) {
    return [
      m("ul", { class: 'nav nav-pills nav-stacked sidebar-nav' }, [
        m("li", [
          m("a", { href: '' }, [
            m("i", { class: 'fa fa-user-plus', 'aria-hidden': 'true' })
          ])
        ]),
        m("li", [
          m("a", { href: '' }, [
            m("i", { class: 'fa fa-users', 'aria-hidden': 'true' })
          ])
        ]),
        m("li", [
          m("a", { href: '' }, [
            m("i", { class: 'fa fa-ticket', 'aria-hidden': 'true' })
          ])
        ]),
        m("li", [
          m("a", { href: '' }, [
            m("i", { class: 'fa fa-file-text-o', 'aria-hidden': 'true' })
          ])
        ]),
        m("li", [
          m("a", { href: '' }, [
            m("i", { class: 'fa fa-plus', 'aria-hidden': 'true' })
          ])
        ]),
        m("li", [
          m("a", { href: '' }, [
            m("i", { class: 'fa fa-archive', 'aria-hidden': 'true' })
          ])
        ])
      ])
    ]
  }
}

// $(document).ready(function() {
//
//   var menu = document.getElementById("sidebarNav");
//
//   if(menu){
//     m.module(menu, sidebarNav);
//   };
//
// })
