/**
 * Created by ppp on 2016/04/25.
 */
import * as http from "http";
import {IncomingMessage} from "http";

namespace main {
    "use strict";
    let url: string = process.argv[2];

    http.get(url, (response: IncomingMessage) => {
        response.setEncoding("utf8");
        response.on("data", (result: string) => {
            result.split("\n").forEach((char: string) => {
                console.log(char);
            });
        });
    });
}
