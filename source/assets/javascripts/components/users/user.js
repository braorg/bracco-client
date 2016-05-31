var User = (function() {
  var url = "api/users/";
  var defaultOptions = {
    unwrapSuccess: function(response) {
      if(response)
        return response.data;
    },
    unwrapError: function(response) {
      return response.error;
    }
  };

  return {
    model: {
      first_name: m.prop(""),
      last_name: m.prop(""),
      username: m.prop(""),
      email: m.prop(""),
      password: m.prop(""),
      confirm_password: m.prop(""),
      profile_id: m.prop(2)
    },
    create: function() {
      return m.request(
        $.extend({
          method: "POST",
          url: Bracco.baseUrl + url,
          data: { user: this.model },
          config: function(xhr) {
            xhr.setRequestHeader("accept", "application/json");
            xhr.setRequestHeader("content-type", "application/json");
          }
        }, defaultOptions)
      );
    },
    all: function(params) {
      return m.request(
        $.extend({
          method: "GET",
          url: Bracco.baseUrl + url + "?" + params
        }, defaultOptions)
      );
    },
    show: function(id) {
      return m.request(
        $.extend({
          method: "GET",
          url: Bracco.baseUrl + url + id,
        }, defaultOptions)
      );
    },
    archive: function(id) {
      return m.request(
        $.extend({
          method: "PUT",
          url: Bracco.baseUrl + url + id,
        }, defaultOptions)
      );
    },
    delete: function(id) {
      return m.request(
        $.extend({
          method: "DELETE",
          url: Bracco.baseUrl + url + id,
        }, defaultOptions)
      );
    }
  }
})();
