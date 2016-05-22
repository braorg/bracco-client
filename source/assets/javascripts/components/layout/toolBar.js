var toolBar = {
  controller: function(){},
  view: function(){
    return m(".clearfix toolbar", [
      m(".pull-left", [
        m.component(searchForm)
      ]),
      m(".pull-right hidden-xs", [])
    ])
  }
}
