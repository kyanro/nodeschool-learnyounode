"use strict";
/**
 * Created by ppp on 2016/05/02.
 */
var http = require("http");
var main;
(function (main) {
    "use strict";
    var port = Number(process.argv[2]);
    var server = http.createServer(function (req, res) {
        var upperBuf = "";
        req.setEncoding("utf8");
        req.on("data", function (data) {
            upperBuf += data.toUpperCase();
        });
        req.on("end", function () {
            res.end(upperBuf);
        });
    });
    server.listen(port);
})(main || (main = {}));
//# sourceMappingURL=main.js.map