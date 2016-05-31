var userItem = {
  controller: function(user, buttons){
    this.user = user;
    this.buttons = buttons;
  },
  view: function(ctrl, user, buttons){
    return m('.wrapper .padding-10 .items-list__row', { id: user.id },  [
      m(".items-list__info", [
        m("span", { class: "column" }, user.first_name),
        m("span", { class: "column" }, user.last_name),
        m("span", { class: "column" }, user.username),
        m("span", { class: "column" }, user.email)
      ]),
      m(tinyNav,
        { buttons: getTinies(ctrl.user, ctrl.buttons),
          style: "horizontalStyle"
        }
      )
    ])
  }
}
