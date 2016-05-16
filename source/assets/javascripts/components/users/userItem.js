var userItem = {
  model: {
    id: "2"
  },
  controller: function(){
    this.archive = function() {
      alert("Archive");
    };
    this.delete = function() {
      alert("Delete");
    };
    this.buttonItems = [
      {
        "icon": "fa-eye",
        "title": "Mostra dettagli",
        "link": "/users/" + userItem.model.id,
        "btnClass": "btn-info"
      },
      {
        "icon": "fa-pencil",
        "title": "Modifica",
        "link": "/users/" + userItem.model.id + "/edit",
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
  },
  view: function(ctrl){
    return m('.wrapper .padding-10 .items-list__row', [
      m(".items-list__info", [
        m("span", { class: "column" }, "Ilaria Di Rosa"),
        m("span", { class: "column" }, "iladiro"),
        m("span", { class: "column" }, "angels88"),
        m("span", { class: "column" }, "dirosa.ilaria@gmail.com")
      ]),
      m(userActions, { buttons: ctrl.buttonItems } )
    ])
  }
}
