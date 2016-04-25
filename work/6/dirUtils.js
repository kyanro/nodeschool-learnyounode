"use strict";
/**
 * Created by ppp on 2016/04/25.
 */
var fs = require("fs");
var path = require("path");
function filterDir(dirName, ext, func) {
    "use strict";
    var extDot = "." + ext;
    fs.readdir(dirName, function (err, files) {
        if (err != undefined) {
            func(err, undefined);
            return;
        }
        var filterdFiles = files
            .filter(function (file) { return path.extname(file) === extDot; });
        func(undefined, filterdFiles);
    });
}
exports.filterDir = filterDir;
