"use strict";
/**
 * Created by ppp on 2016/05/02.
 */
var http = require("http");
var fs = require("fs");
var main;
(function (main) {
    "use strict";
    var port = Number(process.argv[2]);
    var filePath = process.argv[3];
    var server = http.createServer(function (request, response) {
        fs.createReadStream(filePath).pipe(response);
    });
    server.listen(port);
})(main || (main = {}));
//# sourceMappingURL=main.js.map