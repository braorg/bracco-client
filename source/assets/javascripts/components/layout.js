var nav = function() {
    return [
        "nav here"
    ];
};

// var content = function() {
//     return [
//         "body here"
//     ];
// };
//
var layout = function(nav, content) {
    return m(".layout", [
        m("header", nav),
        m("main", content)
    ]);
};

var mixinLayout = function(layout, nav, content) {
    return function() {
        return layout(nav(), content());
    };
};

// $(document).ready(function() {
//
//   m.module(document, {controller: function() {}, view: layout});
//
// })
