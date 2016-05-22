dashboard = (function() {

  var dashboardItems = [
    {
      "image": "assets/images/ico-ticket.png",
      "title": "Task",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." +
                    "Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis." +
                    "Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      "link": "/task",
      "btn": "Vai ai task"
    },
    {
      "image": "assets/images/ico-notes.png",
      "title": "Appunti",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." +
                    "Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis." +
                    "Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      "link": "/notes",
      "btn": "Vai agli appunti"
    },
    {
      "image": "assets/images/ico-rubric.png",
      "title": "Rubrica",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." +
                    "Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis." +
                    "Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      "link": "/rubric",
      "btn": "Vai alla rubrica"
    },
    {
      "image": "assets/images/ico-users.png",
      "title": "Amministrazione Utenti",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." +
                    "Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis." +
                    "Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      "link": "/users",
      "btn": "Vai alla lista"
    }
  ];

  var content = function() {
    return [
      m(".row",
        dashboardItems.map(dashboardBox)
      )
    ];
  };

  return {
    controller: function(){
      var ctrl = this;
    },
    view: mixinLayout(layout, topNav, sidebarNav, breadcrumbBar, content)
  };
})();
