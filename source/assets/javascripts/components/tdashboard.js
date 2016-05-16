dashboard = (function() {
  var content = function() {
    return [
      m(".row", [
        m(".col-sm-6", [
          m(".wrapper padding-15", [
            m(".media media-dashboard", [
              m(".media-left", [
                m("img", { src: "assets/images/ico-ticket.png" })
              ]),
              m(".media-body", [
                m("h4", { class: "media-heading" }, "Task"),
                m("p", { class: "media-description" },
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio."),
                m("a", { class: "media-btn btn btn-success btn-sm", href: "task-calendar.html" }, "Vai ai task")
              ])
            ])
          ])
        ])
      ])
		];
  };

  return {
    controller: function(){
      var ctrl = this;
    },
    view: mixinLayout(layout, topNav, sidebarNav, breadcrumbBar, content)
  };
})();
