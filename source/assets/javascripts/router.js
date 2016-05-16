m.route(document.getElementById('app'), "/", {
  // Login routing
  "/": loginForm,

  // Users routing
  "/users": users,
  "/users/new": userForm,
  "/users/archive": usersArchive,

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
