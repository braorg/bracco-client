usersArchive = (function() {

  var content = function(ctrl) {
    return [
      m(toolBar),
      m(".items-list",
        ctrl.users().map(function(user) {
          return m(userItem, user);
        })
      )
		];
  };

  return {
    controller: function(){
      var ctrl = this;
      ctrl.users = User.all("archived=true");
    },
    view: mixinLayout(layout2, topNav, sidebarNav, breadcrumbBar, content)
  };

})();
