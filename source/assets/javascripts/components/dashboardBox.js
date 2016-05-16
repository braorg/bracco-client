var dashboardBox = function(item) {
  return m(".col-sm-6", [
    m(".wrapper padding-15", [
      m(".media media-dashboard", [
        m(".media-left", [
          m("img", { src: item.image })
        ]),
        m(".media-body", [
          m("h4", { class: "media-heading" }, item.title),
          m("p", { class: "media-description" }, item.description),
          m("a", { class: "media-btn btn btn-success btn-sm", href: item.link, config: m.route }, item.btn )
        ])
      ])
    ])
  ]);
}
