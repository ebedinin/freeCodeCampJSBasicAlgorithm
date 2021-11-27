function bouncer(arr) {
    return arr.filter((item)=>{
        return Boolean(item);
    });
}

console.log(bouncer([7, "ate", "", false, 9]));