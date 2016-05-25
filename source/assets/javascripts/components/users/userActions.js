var userActions = {
  view: function(ctrl, attrs) {
    return m(".items-list__buttons", [
      m("a", { class: "btn btn-check" }),
      attrs.buttons.map( function(button){
        if(button.link){
          return m(buttonLink, button);
        } else {
          return m(buttonAction, button);
        }
      })
    ])
  }
};
