"use strict";
/**
 * Created by ppp on 2016/04/25.
 */
var dirUtils = require("./dirUtils");
var main;
(function (main) {
    "use strict";
    var path = process.argv[2];
    var ext = process.argv[3];
    dirUtils.dirUtils.filterDir(path, ext, function (err, files) {
        files.forEach(function (name) { return console.log(name); });
    });
})(main || (main = {}));
//# sourceMappingURL=main.js.map