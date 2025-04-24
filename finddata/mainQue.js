import { Queue as line } from "./quething.js";
const reversewithQue = (str) => {
    let que = new line();
    for (let i = str.length - 1; i >= 0; i--){
        que.quePush(str[i])
    }
    let reverse = "";
    while (!que.isEmpty()) {
        reverse += que.dequeue();
    }
    return reverse;
}
let a = new line();
a.quePush('a')
a.quePush('aa')
a.quePush('aaa')
a.quePush('aaaa')
console.log(a)
console.log(reversewithQue("Find the God"))