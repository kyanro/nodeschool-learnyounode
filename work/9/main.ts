/**
 * Created by ppp on 2016/05/01.
 */
import * as http from "http";
import {IncomingMessage} from "http";

namespace main {
    "use strict";
    import ErrnoException = NodeJS.ErrnoException;
    let urls: string[] = [];
    urls[0] = process.argv[2];
    urls[1] = process.argv[3];
    urls[2] = process.argv[4];

    urls.forEach((url: string, index: number) => {
        http.get(url, (response: IncomingMessage) => {
            let buf: string = "";
            response.setEncoding("utf8");
            response.on("data", (result: string) => {
                buf += result;
            });
            response.on("end", () => {
                outputIfFinished(buf, index);
            });
            response.on("error", (error: ErrnoException) => {
                // ignore;
            });
        });
    });

    let resultCount: number = 0;
    let outBuffs: string[] = [];

    function outputIfFinished(result: string, index: number): void {
        resultCount++;
        outBuffs[index] = result;
        if (resultCount < 3) {
            return;
        }
        outBuffs.forEach((outputBuf: string) => {
            console.log(outputBuf);
        });
    }
}
