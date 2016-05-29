var buttonAction = {
  controller: function(){
    var ctrl = this;
    this.archive = function() {
      alert("Archive");
      // ctrl.user = User.archive(m.route.param("userId"));
    };
    // this.restores = function() {
    //   alert("Ripristina");
    // };
    this.delete = function() {
      ctrl.user = User.delete(m.route.param("userId"));
    };
  },
  view: function(ctrl, attrs) {
    return m("li", [
      m("a", { class: "btn btn-square " + attrs.btnClass , onclick: ctrl[attrs.action], title: attrs.title }, [
        m("i", { class: "fa " + attrs.icon, "aria-hidden": "true" })
      ])
    ])
  }
}
