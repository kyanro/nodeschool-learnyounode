/**
 * Created by ppp on 2016/05/02.
 */
import * as http from "http";
import {Server} from "http";
import {IncomingMessage} from "http";
import {ServerResponse} from "http";
import * as url from "url";
import {Url} from "url";

namespace main {
    "use strict";
    let port: number = Number(process.argv[2]);
    let server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
        if (req.method !== "GET") {
            return;
        }

        let parsedUrl: Url = url.parse(req.url, true);
        if (parsedUrl.pathname.lastIndexOf("/api/parsetime", 0) === 0) {
            let iso: string = parsedUrl.query.iso;
            let date: Date = new Date(iso);

            let responseDate: Object = {
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds(),
            };
            res.end(JSON.stringify(responseDate));
            return;
        }

        if (parsedUrl.pathname.lastIndexOf("/api/unixtime", 0) === 0) {
            let iso: string = parsedUrl.query.iso;
            let date: Date = new Date(iso);

            let responseDate: Object = {
                "unixtime": date.getTime()
            };
            res.end(JSON.stringify(responseDate));
            return;
        }

        res.end();
    });

    server.listen(port);
}
