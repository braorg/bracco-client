usersList = (function() {

  var content = function(ctrl) {
    return [
      m.component(confirmDialog),
      m(toolBar),
      m(".items-list",
        ctrl.users().map(function(user) {
          return m(userItem, user, ctrl.tinyButtonKeys, ctrl);
        })
      ),
      m.component(pagination,
        $.extend(
          User.pageInfo,
          {
            xhr: function(params) {
              ctrl.users = User.all(params);
            },
            defaultParams: {
              archived: false
            }
          }
        )
      )
		];
  };

  return {
    controller: function(){
      var ctrl = this;
      ctrl.users = User.all({archived: false});
      ctrl.tinyButtonKeys = ["show", "edit", "archive", "delete"];
    },
    view: mixinLayout(layout2, topNav, sidebarNav, breadcrumbBar, content)
  };

})();
