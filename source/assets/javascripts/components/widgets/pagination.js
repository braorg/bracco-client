var pagination = {
  controller: function(pageInfo) {
    var ctrl = this;
    ctrl.pageInfo = pageInfo;
    ctrl.paramsFor = function(pageNumber) {
      return $.extend(pageInfo.defaultParams, { page: pageNumber });
    };
    ctrl.prevAvailable = function() {
      return pageInfo.pageNumber > 1;
    };
    ctrl.nextAvailable = function() {
      return pageInfo.pageNumber < pageInfo.totalPages;
    };
  },
  view: function(ctrl) {
    if(ctrl.pageInfo.totalPages > 1) {
      return m("nav", {}, [
        m("ul", { class: "pagination" }, [].concat(
          m("li", {}, [
            m("a", {
              href: "#",
              onclick: function(event) {
                event.preventDefault();
                if(ctrl.prevAvailable())
                  ctrl.pageInfo.xhr(ctrl.paramsFor(ctrl.pageInfo.pageNumber - 1));
                else
                  void(0);
              },
              "aria-label": "Precedente",
              class: ctrl.prevAvailable() ? "active" : "disabled"
            }, [
              m("span", { "aria-hidden": "true" }, m.trust("&laquo;"))
            ])
          ])).concat(
            (Array.apply(null, Array(ctrl.pageInfo.totalPages))).map(function(_, idx) {
              return m(paginationLink, {
                action: function(event) {
                  event.preventDefault();
                  ctrl.pageInfo.xhr(ctrl.paramsFor(idx + 1));
                },
                idx: (idx + 1),
                currentPage: ctrl.pageInfo.pageNumber
              });
            })
          ).concat(
          m("li", {}, [
            m("a", {
              href: "#",
              onclick: function(event) {
                event.preventDefault();
                if(ctrl.nextAvailable())
                  ctrl.pageInfo.xhr(ctrl.paramsFor(ctrl.pageInfo.pageNumber + 1));
                else
                  void(0);
              },
              "aria-label": "Successiva",
              class: ctrl.nextAvailable() ? "active" : "disabled"
            }, [
              m("span", { "aria-hidden": "true" }, m.trust("&raquo;"))
            ])
          ])
        ))
      ])
    }
  }
}

var paginationLink = {
  controller: function(attrs) {
    var ctrl = this;
    ctrl.action = attrs.action;
    ctrl.idx = attrs.idx;
    ctrl.currentPage = attrs.currentPage;
  },
  view: function(ctrl) {
    console.log(ctrl.currentPage, ctrl.idx);
    return m("li", {
      class: (ctrl.currentPage === ctrl.idx) ? "active" : ""
    }, [
      m("a", {
        href: "#",
        onclick: ctrl.action
      }, ctrl.idx)
    ]);
  }
}
