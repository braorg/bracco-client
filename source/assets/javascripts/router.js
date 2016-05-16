m.route(document.getElementById('app'), "/", {
  // Users routing
  "/": loginForm,
  "/users": users,
  "/users/new": userForm,

  // Notes routing
  "/notes/new": noteForm,

  // Rubric routing
  "/rubric/new": rubricForm,

  // Task routing
  "/task/new": taskForm
});
