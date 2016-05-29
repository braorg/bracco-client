var tinyNav = {
  controller: function(){},
  view: function(ctrl, attrs){
    if( attrs.style === "horizontalStyle" ){
      return m(userActions, { list_type: "list-inline", buttons: attrs.buttons } )
    } else {
      return m("nav", { class: "tiny-nav" }, [
        m(userActions, { list_type: "list-unstyled", buttons: attrs.buttons } )
      ])
    }
  }
}
