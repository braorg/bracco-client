var buttonLink = {
  view: function(ctrl, attrs) {
    return m("a", { class: "btn btn-square " + attrs.btnClass , href: attrs.link, title: attrs.title }, [
      m("i", { class: "fa " + attrs.icon, "aria-hidden": "true" })
    ])
  }
}
