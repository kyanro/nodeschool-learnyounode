"use strict";
/**
 * Created by ppp on 2016/05/02.
 */
var net = require("net");
var main;
(function (main) {
    "use strict";
    var port = Number(process.argv[2]);
    var server = net.createServer(function (socket) {
        var date = new Date();
        var yyyy = date.getFullYear().toString();
        var MM = ("0" + (date.getMonth() + 1)).slice(-2);
        var dd = ("0" + date.getDate()).slice(-2);
        var hh = ("0" + date.getHours()).slice(-2);
        var mm = ("0" + date.getMinutes()).slice(-2);
        socket.write(yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm);
        socket.end();
    });
    server.listen(port);
})(main || (main = {}));
//# sourceMappingURL=main.js.map