var buttonAction = {
  controller: function(attrs){
    var ctrl = this;
    ctrl.archive = function() {
      alert("Archive");
      // ctrl.user = User.archive(m.route.param("userId"));
    };
    ctrl.restores = function() {
      alert("Ripristina");
    };
    ctrl.delete = function() {
      if (confirm("Sei sicuro?")) {
        User.delete(attrs.id).then(function() {
          alert("L'utente è stato cancellato correttamente");
          m.route("/users");
        });
      }
    };
  },
  view: function(ctrl, attrs) {
    return m("li", [
      m("a", {
        class: "btn btn-square " + attrs.btnClass ,
        onclick: ctrl[attrs.action],
        title: attrs.title
        // id: attrs.id
      }, [
        m("i", { class: "fa " + attrs.icon, "aria-hidden": "true" })
      ])
    ])
  }
}
