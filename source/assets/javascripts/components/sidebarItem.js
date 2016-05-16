var sideBarItem = function(item) {
  return m("li", { class: (item.active ? 'active' : '') }, [
    m("a", { href: item.link, title: item.title, config: m.route }, [
      m("i", { class: 'fa ' + item.icon, 'aria-hidden': 'true' })
    ])
  ]);
}
