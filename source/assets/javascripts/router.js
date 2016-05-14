// m.route(document.getElementById('app'), '/', {
//
//   '/': layout,
//
//   '/users/new': userForm,
//
//   '/contacts/new': contactForm,
//
//   '/notes/new': noteForm
//
// })


// m.route(document.getElementById('app'), '/', {
//   '/': { view: viewTemplate() },
//   '/1': loginForm,
//   '/2': component2,
// })

m.route(document.getElementById('app'), "/", {
    "/": loginForm
    //"/bar": loginForm
});
