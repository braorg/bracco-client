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
    }
  }
})();
