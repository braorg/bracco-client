var tinyNav = {
  controller: function(){},
  view: function(ctrl, attrs){
    return m("nav", { class: "tiny-nav" }, [
      // m("ul", { class: "list-unstyled" }, [
      //   m("li", [
      //     m("a", { class: "btn btn-square", href: "" }, [
      //       m("i", { class: "fa", "aria-hidden": "true" })
      //     ])
      //   ])
      // ])
      m(userActions, { list_type: "list-unstyled", buttons: attrs.buttons } )
    ])
  }
}
