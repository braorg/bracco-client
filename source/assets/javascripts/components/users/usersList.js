usersList = (function() {

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
      ctrl.users = m.request({
        method: "GET",
        url: Bracco.baseUrl + "api/users?archived=false",
        unwrapSuccess: function(response) {
          return response.data;
        },
        unwrapError: function(response) {
          return response.error;
        }
      });
    },
    view: mixinLayout(layout2, topNav, sidebarNav, breadcrumbBar, content)
  };

})();
