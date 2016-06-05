var tinyNav = {
  controller: function(){},
  view: function(ctrl, attrs){
    if( attrs.class === "list-inline" ){
      return m(userActions, attrs )
    } else {
      return m("nav", { class: "tiny-nav" }, [
        m(userActions, attrs )
      ])
    }
  }
}
