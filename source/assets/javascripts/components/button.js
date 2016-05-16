var button = function(item) {
  return m("a", { class: "btn btn-square " + item.btnClass , href: item.link, title: item.title }, [
    m("i", { class: "fa " + item.icon, "aria-hidden": "true" })
  ])
}
