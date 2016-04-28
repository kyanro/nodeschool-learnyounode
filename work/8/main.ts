/**
 * Created by ppp on 2016/04/28.
 */
import * as http from "http";
import {IncomingMessage} from "http";

namespace main {
    "use strict";
    let url: string = process.argv[2];
    http.get(url, (response: IncomingMessage) => {
        let body: string = "";
        response.setEncoding("utf8");
        response.on("data", (listener: string) => {
            body += listener;
        });
        response.on("end", () => {
            console.log(body.length);
            console.log(body);
        });
    });
}
