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
            if (err != undefined) {
                func(err, undefined);
                return;
            }
            var filterdFiles = files
                .filter(function (file) { return path.extname(file) === extDot; });
            func(undefined, filterdFiles);
        });
    }
    dirUtils.filterDir = filterDir;
})(dirUtils = exports.dirUtils || (exports.dirUtils = {}));
//# sourceMappingURL=dirUtils.js.map