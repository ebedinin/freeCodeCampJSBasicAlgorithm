function repeatStringNumTimes(str, num) {
    if (num < 1) return "";
    let out = "";
    while (num > 0) {
        out += str;
        num--;
    }
    return out;
}

console.log(repeatStringNumTimes("abc", 3));