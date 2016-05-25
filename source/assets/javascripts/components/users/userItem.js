var userItem = {
  controller: function(user){
    this.user = user;
    // this.selected = function() {
    //
    // };
    this.archive = function() {
      alert("Archive");
    };
    this.restores = function() {
      alert("Ripristina");
    };
    this.delete = function() {
      // alert("Delete");
      // return m(".modal fade", { tabindex: "-1", role: "dialog",
      // "aria-labelledby": "myModalLabel", id: "myModal" }, [
      //   m(".modal-dialog", [
      //     m(".modal-content", [
      //       m(".modal-body", "Pippo")
      //     ])
      //   ])
      // ])
      m.request({
        method: "DELETE",
        url: Bracco.baseUrl + "api/users/" + m.route.param("userId"),
        unwrapSuccess: function(response) {
          return response.data;
        },
        unwrapError: function(response) {
          return response.error;
        }
      });
    };
    this.buttonItems = [
      {
        "icon": "fa-eye",
        "title": "Mostra dettagli",
        "link": "/users/" + user.id,
        "btnClass": "btn-info"
      },
      {
        "icon": "fa-pencil",
        "title": "Modifica",
        "link": "/users/" + user.id + "/edit",
        "btnClass": "btn-info"
      },
      {
        "icon": "fa-archive",
        "title": "Archivia",
        "action": this.archive,
        "btnClass": "btn-warning"
      },
      {
        "icon": "fa-trash-o",
        "title": "Elimina",
        "action": this.delete,
        "btnClass": "btn-danger"
      }
    ];
    this.buttonArchivedItems = [
      {
        "icon": "fa-eye",
        "title": "Mostra dettagli",
        "link": "/users/" + user.id,
        "btnClass": "btn-info"
      },
      {
        "icon": "fa-reply",
        "title": "Ripristina",
        "action": this.restores,
        "btnClass": "btn-warning"
      },
      {
        "icon": "fa-trash-o",
        "title": "Elimina",
        "action": this.delete,
        "btnClass": "btn-danger"
      }
    ];
  },
  view: function(ctrl, user){
    return m('.wrapper .padding-10 .items-list__row', { id: user.id },  [
      m(".items-list__info", [
        m("span", { class: "column" }, user.first_name),
        m("span", { class: "column" }, user.last_name),
        m("span", { class: "column" }, user.username),
        m("span", { class: "column" }, user.email)
      ]),
      m(userActions, { list_type: "list-inline", buttons: (user.archived ? ctrl.buttonArchivedItems : ctrl.buttonItems) } )
    ])
  }
}
