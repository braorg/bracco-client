var User = (function() {
  var url = "api/users/";
  var defaultOptions = {
    unwrapSuccess: function(response) {
      return response.data;
    },
    unwrapError: function(response) {
      return response.error;
    }
  };

  return {
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
