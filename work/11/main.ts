/**
 * Created by ppp on 2016/05/02.
 */
import * as http from "http";
import * as fs from "fs";
import {IncomingMessage} from "http";
import {ServerResponse} from "http";
import {Server} from "http";

namespace main {
    "use strict";
    let port: number = Number(process.argv[2]);
    let filePath: string = process.argv[3];

    let server: Server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
        fs.createReadStream(filePath).pipe(response);
    });

    server.listen(port);
}
