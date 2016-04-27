"use strict";
/**
 * Created by ppp on 2016/04/25.
 */
var http = require("http");
var main;
(function (main) {
    "use strict";
    var url = process.argv[2];
    http.get(url, function (response) {
        response.setEncoding("utf8");
        response.on("data", function (result) {
            result.split("\n").forEach(function (char) {
                console.log(char);
            });
        });
    });
})(main || (main = {}));
