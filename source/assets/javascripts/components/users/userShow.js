userShow = (function() {

  var tinyButtonKeys = ["edit", "archive", "delete"];

  var content = function(ctrl) {
    return [
      m(".col-xs-12 .col-sm-7 .col-md-4 .center-block", [
        m(".wrapper .padding-30", { id: ctrl.user().id }, [
          m("p", { class: "no-margin-top decorator" }, ctrl.user().first_name + " " + ctrl.user().last_name),
          m("p", { class: "no-margin-top decorator" }, ctrl.user().username),
          m("p", { class: "no-margin-top decorator" }, ctrl.user().email),
          m("p", { class: "no-margin-top decorator" }, ( (ctrl.user().profile_id == "1") ? "Amministratore" : "Utente semplice") ),
          m("img", { src: Bracco.baseUrl + ctrl.user().avatar_url, class: "img-responsive decorator" })
        ])
      ]),
      m.component(tinyNav, { buttons: getTinies(ctrl.user(), tinyButtonKeys) })
		];
  };

  return {
    controller: function(){
      var ctrl = this;
      ctrl.user = User.show(m.route.param("userId"));

      ctrl.hiddenPsw = function(){
        return ctrl.user.password.replace(/./g, "•");
      }
    },
    view: mixinLayout(layout2, topNav, sidebarNav, breadcrumbBar, content)
  };

})();
