"use strict";
/**
 * Created by ppp on 2016/04/24.
 */
var fs = require("fs");
var main;
(function (main) {
    "use strict";
    fs.readFile(process.argv[2], "utf8", function (err, data) {
        var lineNum = data.split("\n").length - 1;
        console.log(lineNum);
    });
})(main || (main = {}));
