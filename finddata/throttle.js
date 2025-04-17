function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now()
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return fn(...args)
    }
}
function sendingMessage(message) {
    console.log(`Sending the message ${message}`)
}
const sendMessagewithslowmode = throttle(sendingMessage, 2 * 1000)

sendMessagewithslowmode("hi")
sendMessagewithslowmode("hi boss")
sendMessagewithslowmode("hi boss how you doing")
sendMessagewithslowmode("fine this is great")