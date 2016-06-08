var buttonAction = {
  controller: function(button, actions){
    var ctrl = this;
  },
  view: function(ctrl, button, actions) {
    return m("li", [
      m("a", {
        class: "btn btn-square " + button.btnClass,
        onclick: actions[button.action],
        title: button.title
      }, [
        m("i", { class: "fa " + button.icon, "aria-hidden": "true" })
      ])
    ])
  }
}
