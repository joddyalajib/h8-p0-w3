function balikString(kata) {
    var result = "";
    for (var i = kata.length - 1 ; i >= 0;i--) {
        result += kata[i];
    }
    return result;
}

balikString("Hello World!");

console.log(balikString("Hello World!"));











