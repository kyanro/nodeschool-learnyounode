"use strict";
/**
 * Created by ppp on 2016/04/25.
 */
var fs = require("fs");
var path = require("path");
var main;
(function (main) {
    "use strict";
    var target = process.argv[2];
    var filter = "." + process.argv[3];
    fs.readdir(target, function (err, lists) {
        lists
            .filter(function (list) { return path.extname(list) === filter; })
            .forEach(function (name) { return console.log(name); });
    });
})(main || (main = {}));
