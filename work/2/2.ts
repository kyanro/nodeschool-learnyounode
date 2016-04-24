/**
 * Created by ppp on 2016/04/24.
 */
let sum: number = process.argv
    .slice(2)
    .map((numStr: string) => Number(numStr))
    .reduce((prev: number, current: number) => prev + current);

console.log(sum);




