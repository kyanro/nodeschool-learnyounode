/**
 * Created by ppp on 2016/04/25.
 */
import * as dirUtils from "./dirUtils";
namespace main {
    "use strict";
    import ErrnoException = NodeJS.ErrnoException;
    let path: string = process.argv[2];
    let ext: string = process.argv[3];

    dirUtils.dirUtils.filterDir(path, ext, (err: ErrnoException, files: string[]) => {
        files.forEach((name: string) => console.log(name));
    });
}
