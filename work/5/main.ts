/**
 * Created by ppp on 2016/04/25.
 */
import * as fs from "fs";
import * as path from "path";
namespace main {
    "use strict";
    import ErrnoException = NodeJS.ErrnoException;
    let target: string = process.argv[2];
    let filter: string = "." + process.argv[3];
    fs.readdir(target, (err: ErrnoException, lists: string[]) => {
        lists
            .filter((list: string) => path.extname(list) === filter)
            .forEach((name: string) => console.log(name));
    });
}
