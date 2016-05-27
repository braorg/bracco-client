var tinyNav = {
  controller: function(){},
  view: function(ctrl, attrs){
    return m("nav", { class: "tiny-nav" }, [
      m(userActions, { list_type: "list-unstyled", buttons: attrs.buttons } )
    ])
  }
}
