"use strict";
/**
 * Created by ppp on 2016/04/24.
 */
var fs = require("fs");
var main;
(function (main) {
    "use strict";
    var argv = process.argv[2];
    var buf = fs.readFileSync(argv);
    var sum = buf.toString().split("")
        .filter(function (char) { return char === "\n"; })
        .map(function (char) { return 1; })
        .reduce(function (prev, current) { return prev + current; });
    console.log(sum);
})(main || (main = {}));
//# sourceMappingURL=main.js.map