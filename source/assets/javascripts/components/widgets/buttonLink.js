var buttonLink = {
  view: function(ctrl, attrs) {
    return m("li", [
      m("a", { class: "btn btn-square " + attrs.btnClass , href: attrs.link, config: m.route, title: attrs.title }, [
        m("i", { class: "fa " + attrs.icon, "aria-hidden": "true" })
      ])
    ])
  }
}
