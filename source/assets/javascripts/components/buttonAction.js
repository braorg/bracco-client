var buttonAction = {
  view: function(ctrl, attrs) {
    return m("a", { class: "btn btn-square " + attrs.btnClass , onclick: attrs.action, title: attrs.title }, [
      m("i", { class: "fa " + attrs.icon, "aria-hidden": "true" })
    ])
  }
}
