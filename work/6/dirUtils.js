"use strict";
/**
 * Created by ppp on 2016/04/25.
 */
var fs = require("fs");
var path = require("path");
var dirUtils;
(function (dirUtils) {
    "use strict";
    function filterDir(dirName, ext, func) {
        var extDot = "." + ext;
        fs.readdir(dirName, function (err, files) {
            console.log("dirName:" + dirName);
            if (err != undefined) {
                console.log("err:" + err);
                func(err, undefined);
                return;
            }
            var filterdFiles = files
                .filter(function (file) { return path.extname(file) === extDot; });
            console.log("name:" + filterdFiles);
            func(undefined, filterdFiles);
        });
    }
    dirUtils.filterDir = filterDir;
})(dirUtils = exports.dirUtils || (exports.dirUtils = {}));
