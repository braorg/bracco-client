var buttonAction = {
  controller: function(){
    this.archive = function() {
      alert("Archive");
    };
    // this.restores = function() {
    //   alert("Ripristina");
    // };
    // this.delete = function() {
    //   ctrl.user = User.show(m.route.param("userId"));
    // };
  },
  view: function(ctrl, attrs) {
    // console.log(attrs.action);
    return m("li", [
      m("a", { class: "btn btn-square " + attrs.btnClass , onclick: ctrl[attrs.action], title: attrs.title }, [
        m("i", { class: "fa " + attrs.icon, "aria-hidden": "true" })
      ])
    ])
  }
}
