var buttonLink = {
  view: function(ctrl, button) {
    console.log("rendering buttonLink", button)
    return m("li", [
      m("a", {
        class: "btn btn-square " + button.btnClass ,
        href: button.link,
        config: m.route,
        title: button.title
      }, [
        m("i", { class: "fa " + button.icon, "aria-hidden": "true" })
      ])
    ])
  }
}
