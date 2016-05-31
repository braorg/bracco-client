var userActions = {
  view: function(ctrl, attrs) {
    return m(".items-list__buttons", [
      // m("div", { class: "btn btn-checkbox" }, [
      //   m("div", { class: "btn-checkbox__flag" })
      // ]),
      m("ul", { class: attrs.list_type + " no-margin" },
        attrs.buttons.map( function(button){
          if(button.link){
            return m(buttonLink, button);
          } else {
            return m(buttonAction, button);
          }
        })
      )
    ])
  }
};
