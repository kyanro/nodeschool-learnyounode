/**
 * Created by ppp on 2016/04/25.
 */
import * as fs from "fs";
import * as path from "path";
export namespace dirUtils {
    "use strict";
    import ErrnoException = NodeJS.ErrnoException;
    export function filterDir(dirName: string, ext: string, func: (err: ErrnoException, files: string[]) => void): void {
        let extDot: string = "." + ext;
        fs.readdir(dirName, (err: ErrnoException, files: string[]) => {
            console.log("dirName:" + dirName);
            if (err != undefined) {
                console.log("err:" + err);
                func(err, undefined);
                return;
            }
            let filterdFiles: string[] = files
                .filter((file: string) => path.extname(file) === extDot);
            console.log("name:" + filterdFiles);
            func(undefined, filterdFiles);
        });
    }
}
