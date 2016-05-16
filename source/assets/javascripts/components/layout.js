var topNav = function() {
  return {
    controller: function() {},
    view: function(ctrl) {
      return m('nav', { class: 'top-navbar navbar navbar-default navbar-fixed-top' }, [
        m('.container-fluid', [
          m('.navbar-header', [
            m('button', {
              type: 'button',
              class: 'navbar-toggle collapsed',
              id: 'btn-mobile',
              'data-toggle': 'collapse',
              'data-target': '#sidebarNav', 'aria-expanded': 'false'},
              [
                m('span', { class: 'sr-only' }, 'Toggle navigation'),
                m('span', { class: 'icon-bar' }),
                m('span', { class: 'icon-bar' }),
                m('span', { class: 'icon-bar' })
              ]),
            m('a', { class: 'navbar-brand', href: '#' }, [
              m('img', { src: '/assets/images/logo.png' })
            ])
          ]),
          m('.collapse navbar-collapse navbar-right')
        ])
      ]);
    }
  }
};

var sidebarNav = function() {
  return [];
};

var layout = function(topNav, sidebarNav, content) {
  return [
    m.component(topNav),
    m('main', { class: 'main-container'}, [
      m('.container', content)
    ])
  ]
};

var layout2 = function(topNav, sidebarNav, content) {
  return [
    m.component(topNav),
    m('aside', { class: 'sidebar', id: 'sidebarNav' }, [
      m('nav', sidebarNav)
    ]),
    m('main', { class: 'main-container centered'}, [
      m('.container', content)
    ])
  ]
};

var mixinLayout = function(layout, topNav, sidebarNav, content) {
  return function() {
    return layout(topNav(), sidebarNav(), content());
  };
};
