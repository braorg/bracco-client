var avatar = {
  controller: function(){},
  view: function(ctrl){
    return m(".dropdown user clearfix", { id: "avatar" }, [
      m(".pull-left", [
        m("span", { class: "user__label hidden-xs" }, "ilariadirosa@gmail.com"),
        m("span", { class: "user__avatar text-uppercase" }, "I")
      ]),
      m("button", { type: "button", class: "btn btn-link dropdown-toggle pull-left",
      id: "dropdownAvatar", "data-toggle": "dropdown", "aria-haspopup": "true",
      "aria-expanded": "true" }, [
        m("span", { class: "caret" })
      ]),
      m("ul", { class: "dropdown-menu animated fadeInRight", "aria-labelledby": "dropdownAvatar" }, [
        m("li", [
          m("a", { href: "#" }, "Logout")
        ])
      ])
    ])
  }
}
