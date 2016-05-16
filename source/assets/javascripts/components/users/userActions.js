var userActions = {
  view: function(ctrl, attrs) {
    return m(".items-list__buttons", [
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
