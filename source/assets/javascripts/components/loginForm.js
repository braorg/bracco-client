var loginForm = (function() {
  var content = function() {
    return [
			m("form", { class: 'text-center form-customized' }, [
        m.component(textField, { type: 'email', placeholder: 'Username', id: 'email' }),
        m.component(textField, { type: 'password', placeholder: 'Password', id: 'password' }),
        m("button[type=submit]", {
          class: 'btn btn-success btn-lg'
        }, "Login" )
      ])
		];
  };

  return {
    controller: function(){
      var ctrl = this;
    },
    view: mixinLayout(layout, nav, content)
  };
})();

$(document).ready(function() {

  var loginBox = document.getElementById("loginForm");

  if(loginBox){
    m.module(loginBox, loginForm);
  };

})
