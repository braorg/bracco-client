var buttonAction = {
  controller: function(button, actions){
    var ctrl = this;
    ctrl.archive = function() {
      alert("Archive");
      // ctrl.user = User.archive(m.route.param("userId"));
    };
    ctrl.restores = function() {
      alert("Ripristina");
    };
    // ctrl.delete = function() {
    //   if (confirm("Sei sicuro?")) {
    //     User.delete(attrs.id).then(function() {
    //       alert("L'utente è stato cancellato correttamente");
    //       m.route("/users");
    //     });
    //   }
    // };
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
