/**
 * Created by ppp on 2016/04/24.
 */
import * as fs from "fs";
namespace main {
    "use strict";
    let argv: string = process.argv[2];
    let buf: Buffer = fs.readFileSync(argv);

    let sum: number = buf.toString().split("")
        .filter((char: string) => char === "\n")
        .map((char: string) => 1)
        .reduce((prev: number, current: number) => prev + current);
    console.log(sum);
}
