m.route(document.getElementById('app'), "/", {
  // Login routing
  "/": loginForm,

  // Dashboard
  "/dashboard": dashboard,

  // Users routing
  "/users": usersList,
  "/users/new": userForm,
  "/users/archive": usersArchive,
  "/users/:userId": userShow,
  "/users/:userId/edit": userEdit,

  // Notes routing
  "/notes": notesList,
  "/notes/new": noteForm,
  "/notes/archive": notesArchive,
  "/notes/:noteId": noteShow,
  "/notes/:noteId/edit": noteForm,

  // Rubric routing
  "/rubric": rubric,
  "/rubric/new": rubricForm,
  "/rubric/archive": rubricArchive,

  // Task routing
  "/task": task,
  "/task/new": taskForm,
  "/task/archive": taskArchive
});
