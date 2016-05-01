"use strict";
/**
 * Created by ppp on 2016/05/01.
 */
var http = require("http");
var main;
(function (main) {
    "use strict";
    var urls = [];
    urls[0] = process.argv[2];
    urls[1] = process.argv[3];
    urls[2] = process.argv[4];
    urls.forEach(function (url, index) {
        http.get(url, function (response) {
            var buf = "";
            response.setEncoding("utf8");
            response.on("data", function (result) {
                buf += result;
            });
            response.on("end", function () {
                outputIfFinished(buf, index);
            });
            response.on("error", function (error) {
                // ignore;
            });
        });
    });
    var resultCount = 0;
    var outBuffs = [];
    function outputIfFinished(result, index) {
        resultCount++;
        outBuffs[index] = result;
        if (resultCount < 3) {
            return;
        }
        outBuffs.forEach(function (outputBuf) {
            console.log(outputBuf);
        });
    }
})(main || (main = {}));
