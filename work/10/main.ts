/**
 * Created by ppp on 2016/05/02.
 */
import * as net from "net";
import {Server} from "net";
import {Socket} from "net";

namespace main {
    "use strict";
    let port: number = Number(process.argv[2]);
    let server: Server = net.createServer((socket: Socket) => {
        let date: Date = new Date();
        let yyyy: string = date.getFullYear().toString();
        let MM: string = ("0" + (date.getMonth() + 1)).slice(-2);
        let dd: string = ("0" + date.getDate()).slice(-2);
        let hh: string = ("0" + date.getHours()).slice(-2);
        let mm: string = ("0" + date.getMinutes()).slice(-2);
        socket.write(yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm);
        socket.end();
    });
    server.listen(port);
}
