function debounce(fn, delay) {
    let timerid;
    return function (...args) {
        clearTimeout(timerid)
        timerid = setTimeout(() => {
            fn(...args)
        },delay)
    }
}
const search = (query) => {
    console.log(`Searchig your query ${query}`)
}
const searchWithDebounce = debounce(search, 1000)
searchWithDebounce('H')
searchWithDebounce('Hi')
searchWithDebounce('Hi how a')
searchWithDebounce('Hi how are you')