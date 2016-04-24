/**
 * Created by ppp on 2016/04/24.
 */
var sum = process.argv
    .slice(2)
    .map(function (numStr) { return Number(numStr); })
    .reduce(function (prev, current) { return prev + current; });
console.log(sum);
