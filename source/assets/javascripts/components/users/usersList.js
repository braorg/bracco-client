usersList = (function() {

  // var breadcrumbSlugTranslations = {
  //   "users": {
  //     text: "Utenti",
  //     link: "/users",
  //     active: true
  //   }
  // };
  //
  // var breadcrumbItems = function() {
  //   var url = m.route();
  //   var slugs = url.split("/");
  //   return slugs.map(function(slug){
  //     return breadcrumbSlugTranslations[slug];
  //   }).filter(function(slug) {
  //     if(slug != undefined) {
  //       return slug;
  //     };
  //   });
  // };
  //
  // var breadcrumbBar = function() {
  //   return [
  //     m('ol', { class: 'breadcrumb' },
  //       breadcrumb(breadcrumbItems())
  //     )
  //   ];
  // };

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
