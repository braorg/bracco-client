var userItem = {
  controller: function(user){
    this.user = user;
    // this.archive = function() {
    //   alert("Archive");
    // };
    // this.restores = function() {
    //   alert("Ripristina");
    // };
    // this.delete = function() {
    //   ctrl.user = User.show(m.route.param("userId"));
    // };
    this.tinyButtonKeys = ["show", "edit", "archive", "delete"];
  },
  view: function(ctrl, user){
    return m('.wrapper .padding-10 .items-list__row', { id: user.id },  [
      m(".items-list__info", [
        m("span", { class: "column" }, user.first_name),
        m("span", { class: "column" }, user.last_name),
        m("span", { class: "column" }, user.username),
        m("span", { class: "column" }, user.email)
      ]),
      m(tinyNav, { buttons: getTinies(ctrl.user, ctrl.tinyButtonKeys), style: "horizontalStyle" })
    ])
  }
}
