var toolBar = {
  controller: function(){},
  view: function(){
    return m(".clearfix toolbar", [
      m(".pull-left", [
        m.component(searchForm)
      ]),
      m(".pull-right hidden-xs buttons", [
        m("a", { class: "btn btn-success btn-md" }, "show all"),
        m("a", { class: "btn btn-success btn-md" }, "select all"),
        m("a", { class: "btn btn-danger btn-md" }, "delete selected")
      ])
    ])
  }
}
