m.route(document.getElementById('app'), "/", {
  // Login routing
  "/": loginForm,

  // Users routing
  "/users": users,
  "/users/new": userForm,
  "/users/archive": usersArchive,

  // Notes routing
  "/notes/new": noteForm,

  // Rubric routing
  "/rubric/new": rubricForm,

  // Task routing
  "/task/new": taskForm
});
