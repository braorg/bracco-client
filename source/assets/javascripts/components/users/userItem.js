var userItem = {
  controller: function(user, buttons, parent){
    var ctrl = this;
    ctrl.user = user;
    ctrl.buttons = buttons;
    ctrl.archive = function() {
      alert("Archive");
    };
    ctrl.restores = function() {
      alert("Ripristina");
    };
    ctrl.delete = function() {
      confirmDialog.show(function() {
        User.delete(ctrl.user.id).then(function() {
          parent.users().map(function(item, idx) {
            if(item.id === ctrl.user.id) {
              parent.users().splice(idx, 1);
              return;
            }
          })
        });
      })
    };
  },
  view: function(ctrl, user, buttons){
    return m('.wrapper .padding-10 .items-list__row', { id: user.id },  [
      m(".items-list__info", [
        m("span", { class: "column" }, user.first_name),
        m("span", { class: "column" }, user.last_name),
        m("span", { class: "column" }, user.username),
        m("span", { class: "column" }, user.email)
      ]),
      m(tinyNav, {
        buttons: getTinies(ctrl.user, ctrl.buttons),
        actions: {
          onDelete: ctrl.delete,
          onArchive: ctrl.archive,
          onRestores: ctrl.restores
        },
        class: "list-inline"
      })
    ])
  }
}
