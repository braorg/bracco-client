usersList = (function() {

  var content = function(ctrl) {
    return [
      m.component(confirmDialog),
      m(toolBar),
      m(".items-list",
        ctrl.users().map(function(user) {
          return m(userItem, user, ctrl.tinyButtonKeys, ctrl);
        })
      )
		];
  };

  return {
    controller: function(){
      var ctrl = this;
      ctrl.users = User.all("archived=false");
      ctrl.tinyButtonKeys = ["show", "edit", "archive", "delete"];
    },
    view: mixinLayout(layout2, topNav, sidebarNav, breadcrumbBar, content)
  };

})();
