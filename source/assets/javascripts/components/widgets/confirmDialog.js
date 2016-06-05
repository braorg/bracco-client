var confirmDialog = {
  show: function(){
    $("#confirmDialog").fadeIn( "fast" );
  },
  hide: function(){
    $("#confirmDialog").hide();
  },
  controller: function() {
    var ctrl = this;
    ctrl.ok = function(){
      confirmDialog.hide();
    };
    ctrl.cancel = function(){
      confirmDialog.hide();
    };
  },
  view: function(ctrl) {
    return m(".modal bs-example-modal-sm", {
      tabindex: "-1",
      role: "dialog",
      id: "confirmDialog" }, [
      m(".modal-dialog", {
        class: "modal-sm"
      }, [
        m(".modal-content", [
          m(".modal-body", [
            m("p", { class: "text-center no-margin" }, "Sei sicuro di voler cancellare l'elemento?")
          ]),
          m(".modal-footer", [
            m("button", {
              type: "button",
              class: "btn btn-success",
              "data-dismiss": "modal",
              onclick: ctrl.ok
            }, "Conferma"),
            m("button", {
              type: "button",
              class: "btn btn-danger",
              "data-dismiss": "modal",
              onclick: ctrl.cancel
            }, "Cancella")
          ])
        ])
      ])
    ])
  }
};
