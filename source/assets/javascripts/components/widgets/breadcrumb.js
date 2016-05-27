var breadcrumb = function(items, url) {
  return [
    m("li", [
      m("a", { href: "/dashboard", config: m.route }, [
        m("i", { class: "fa fa-home", "aria-hidden": "true" })
      ], "Home")
    ]),
    items.map(
      function(item) {
        if(item.link === url){
          return m("li", { class: "active" }, [
            m("span", item.text )
          ])
        } else {
          return m("li", [
            m("a", { href: item.link, config: m.route }, item.text )
          ])
        }
      }
    )
  ]
}
