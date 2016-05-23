var textField = {
  controller: function(){
    var ctrl = this;
    ctrl.valid = m.prop('border-color: #e6e6e6');
    ctrl.checkLength = function(value){
      if(value.length <= 3) {
        ctrl.valid('border-color: red')
      } else {
        ctrl.valid('border-color: #e6e6e6')
      }
    };
  },
  view: function(ctrl, attrs) {
    return m(".form-group", [
            m("input", $.extend(attrs, {
              // onkeyup: m.withAttr("value", ctrl.checkLength),
              class: 'form-control',
              // style: ctrl.valid()
            }))
          ]);
  }
}
