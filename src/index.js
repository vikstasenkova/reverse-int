module.exports = function reverse (n) {
    let abs = String(Math.abs(n)).split("").reverse().join("")
    return abs
}
