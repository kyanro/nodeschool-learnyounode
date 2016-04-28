"use strict";
/**
 * Created by ppp on 2016/04/28.
 */
var http = require("http");
var main;
(function (main) {
    "use strict";
    var url = process.argv[2];
    http.get(url, function (response) {
        var body = "";
        response.setEncoding("utf8");
        response.on("data", function (listener) {
            body += listener;
        });
        response.on("end", function () {
            console.log(body.length);
            console.log(body);
        });
    });
})(main || (main = {}));
