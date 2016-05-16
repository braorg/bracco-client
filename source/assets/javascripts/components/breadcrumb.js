var breadcrumb = function(items) {
  return [
    m("li", [
      m("a", { href: "/dashboard", config: m.route() }, [
        m("i", { class: "fa fa-home", "aria-hidden": "true" })
      ], "Home")
    ]),
    items.map(function(item) {
      return m("li", { class: (item.active ? "active" : "") }, [
        m("a", { href: item.link, config: m.route() }, item.text )
      ])
    })
  ]
}
