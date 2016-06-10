usersList = (function() {
  var paginate = function(ctrl) {
    return m.component(pagination,
      $.extend(
        ctrl.pageInfo,
        {
          xhr: function(params) {
            ctrl.users = User.all(params, ctrl.requestOptions);
          },
          defaultParams: {
            archived: false
          }
        }
      )
    )
  };

  var content = function(ctrl) {
    return [
      m.component(confirmDialog),
      m(toolBar),
      m(".items-list",
        ctrl.users().map(function(user) {
          return m(userItem, user, ctrl.tinyButtonKeys, ctrl);
        })
      ),
      paginate(ctrl)
		];
  };

  return {
    controller: function(){
      var ctrl = this;
      ctrl.requestOptions = {
        unwrapSuccess: function(response) {
          if(response) {
            ctrl.pageInfo = {
              totalEntries: response.total_entries,
              totalPages: response.total_pages,
              pageNumber: response.page_number
            };
            return response.data;
          }
        },
        unwrapError: function(response) {
          return response.error;
        }
      };
      ctrl.users = m.prop([]);
      ctrl.pageInfo = {};
      ctrl.users = User.all({archived: false}, ctrl.requestOptions);
      ctrl.tinyButtonKeys = ["show", "edit", "archive", "delete"];
    },
    view: mixinLayout(layout2, topNav, sidebarNav, breadcrumbBar, content)
  };

})();
