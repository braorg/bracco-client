var sideBarItem = function(item, url) {
  return m("li", { class: ( (item.link == url) ? 'active' : '') }, [
    m("a", { href: item.link, title: item.title, config: m.route }, [
      m("i", { class: 'fa ' + item.icon, 'aria-hidden': 'true' })
    ])
  ]);
}
