m.route(document.getElementById('app'), "/", {
  // Login routing
  "/": loginForm,

  // Dashboard
  "/dashboard": dashboard,

  // Users routing
  "/users": usersList,
  "/users/new": userForm,
  "/users/archive": usersArchive,
  "/users/:userId/edit": usersArchive,

  // Notes routing
  "/notes": notes,
  "/notes/new": noteForm,
  "/notes/archive": notesArchive,

  // Rubric routing
  "/rubric": rubric,
  "/rubric/new": rubricForm,
  "/rubric/archive": rubricArchive,

  // Task routing
  "/task": task,
  "/task/new": taskForm,
  "/task/archive": taskArchive
});
