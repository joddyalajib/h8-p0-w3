var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];
function dataHandling (input) {
    var str = ""
    for (var i = 0; i < input.length;i++) {
        str += "Nomor ID: " + input[i][0] + "\n" + "Nama Lengkap: " + input[i][1] + "\n" + "TTL: " + input[i][2] + "\n" + "Hobi: " + input[i][3] + "\n" + "\n"
        // console.log( input[i][4])
    }
    console.log(str);
}

dataHandling(input);
