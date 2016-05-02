"use strict";
/**
 * Created by ppp on 2016/05/02.
 */
var http = require("http");
var url = require("url");
var main;
(function (main) {
    "use strict";
    var port = Number(process.argv[2]);
    var server = http.createServer(function (req, res) {
        if (req.method !== "GET") {
            return;
        }
        var parsedUrl = url.parse(req.url, true);
        if (parsedUrl.pathname.lastIndexOf("/api/parsetime", 0) === 0) {
            var iso = parsedUrl.query.iso;
            var date = new Date(iso);
            var responseDate = {
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds()
            };
            res.end(JSON.stringify(responseDate));
            return;
        }
        if (parsedUrl.pathname.lastIndexOf("/api/unixtime", 0) === 0) {
            var iso = parsedUrl.query.iso;
            var date = new Date(iso);
            var responseDate = {
                "unixtime": date.getTime()
            };
            res.end(JSON.stringify(responseDate));
            return;
        }
        res.end();
    });
    server.listen(port);
})(main || (main = {}));
//# sourceMappingURL=main.js.map