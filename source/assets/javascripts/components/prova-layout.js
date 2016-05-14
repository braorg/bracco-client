// // var topNav = function() {
// //     return [
// //       m('nav', { class: 'top-navbar navbar navbar-default navbar-fixed-top' }, [
// //         m('.container-fluid', [
// //           m('.navbar-header', [
// //             m('button', {
// //               type: 'button',
// //               class: 'navbar-toggle collapsed',
// //               id: 'btn-mobile',
// //               'data-toggle': 'collapse',
// //               'data-target': '#sidebarNav', 'aria-expanded': 'false'},
// //               [
// //                 m('span', { class: 'sr-only' }, 'Toggle navigation'),
// //                 m('span', { class: 'icon-bar' }),
// //                 m('span', { class: 'icon-bar' }),
// //                 m('span', { class: 'icon-bar' })
// //               ]),
// //             m('a', { class: 'navbar-brand', href: '#' }, [
// //               m('img', { src: '/assets/images/logo.png' })
// //             ])
// //           ]),
// //           m('.collapse navbar-collapse navbar-right')
// //         ])
// //       ])
// //     ];
// // };
// //
// // // var sidebar = function() {
// // //   return [
// // //     m("aside", { class: 'sidebar', id: 'sidebarNav' }, [
// // //       m.component(sidebarNav)
// // //     ])
// // //   ];
// // // };
// //
// // var body = function() {
// //   return [
// //     m("main", { class: 'main-container centered' } [
// //       m(".container")
// //     ])
// //   ];
// // };
// //
// // var layout = function(topNav, body) {
// //   return m(".layout", [
// //     m("header", topNav),
// //     m("main", body)
// //   ]);
// // };
// //
// // var mixinLayout = function(layout, topNav, body) {
// //   return function() {
// //     return layout(topNav(), body());
// //   };
// // };
// //
// // $(document).ready(function() {
// //
// //   m.module(document, {controller: function() {}, view: layout});
// //
// // })
//
//
// function viewTemplate(content) {
//   return function() { return [
//     m('#header', [
//       'my site',
//       m('a', {config:m.route, href:'/'}, 'home'),
//       m('a', {config:m.route, href:'/1'}, 'page 1'),
//       m('a', {config:m.route, href:'/2'}, 'page 2'),
//     ]),
//     m('hr'),
//
//     m("#view", content),
//
//     m('#footer', 'copyright my site'),
//   ]}
// }
//
// // component1 = {
// //   view: viewTemplate([
// //     m('h1', 'component 1 page')
// //   ])
// // }
//
// component2 = {
//   view: viewTemplate([
//     m('h1', 'component 2 page')
//   ])
// }
