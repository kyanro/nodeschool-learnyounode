/**
 * Created by ppp on 2016/05/02.
 */
import * as http from "http";
import {IncomingMessage} from "http";
import {ServerResponse} from "http";
import {Server} from "http";
namespace main {
    "use strict";
    let port: number = Number(process.argv[2]);
    let server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
        let upperBuf: string = "";
        req.setEncoding("utf8");
        req.on("data", (data: string) => {
            upperBuf += data.toUpperCase();
        });
        req.on("end", () => {
            res.end(upperBuf);
        });
    });

    server.listen(port);
}
