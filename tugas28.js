//fungsi regex
function regex() {
    let str = "abcdefghijklmnopqrstuvwxyz";
    let panggil = str.search(/s/) //mencari index dari string yang elemen s
    return panggil;
}

console.log(`urutan ke-${regex()}`)