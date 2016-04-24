/**
 * Created by ppp on 2016/04/24.
 */
import * as fs from "fs";
namespace main {
    "use strict";
    fs.readFile(process.argv[2], "utf8", (err: NodeJS.ErrnoException, data: string) => {
        let lineNum: number = data.split("\n").length - 1;
        console.log(lineNum);
    });
}
