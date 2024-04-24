// ini File JS

let isReverse = true;

function reverse() {

    let CtoF = document.getElementById('CtoF');
    let CkeF = document.getElementById('CkeF');

    let FtoC = document.getElementById('FtoC');
    let FkeC = document.getElementById('FkeC');

    if (isReverse) {
        //untuk konversi
        console.log(isReverse);
        FtoC.style.display = "block";
        CtoF.style.display = "none";

        //untuk penjelasan
        FkeC.style.display = "block";
        CkeF.style.display = "none";
        console.log("Konversi F ke C");
        isReverse = false;

    } else {
        //untuk konversi
        console.log(isReverse);
        FtoC.style.display = "none";
        CtoF.style.display = "block";

        //untuk penjelasan
        FkeC.style.display = "none";
        CkeF.style.display = "block";
        console.log("Konversi C ke F");
        isReverse = true;
    }
}

function convertC() {
    let angkaCel = document.getElementById("angkaCel").value;
    if (isNaN(angkaCel)) {
        alert("Tolong Input Angka saja");
    }
    console.log(angkaCel);

    let hitungF = (angkaCel * 9 / 5) + 32;

    //console.log(isReverse);
    document.getElementById("hasilFah").value = hitungF;
}

function convertF() {
    let angkaFah = document.getElementById("angkaFah").value;
    if (isNaN(angkaFah)) {
        alert("Tolong Input Angka saja");
    }
    console.log(angkaFah);

    let hitungC = (angkaFah - 32) * 5 / 9;

    //console.log(isReverse);
    document.getElementById("hasilCel").value = hitungC;
    return hasilCel;
}

function Calc() {
    if (isReverse == true) {
        let angkaCel = document.getElementById("angkaCel").value;
        let hitungF = (angkaCel * 9 / 5) + 32;
        document.getElementById("kalkulasi").innerHTML = "C&deg ke F&deg = (" + (angkaCel) + " * 9 / 5) + 32 = " + hitungF + " &degF";
    } if (isReverse == false) {
        let angkaFah = document.getElementById("angkaFah").value;
        let hitungC = (angkaFah - 32) * 5 / 9;
        document.getElementById("kalkulasi").innerHTML = "F&deg ke C&deg = (" + (angkaFah) + " - 32 ) * 5 / 9 = " + hitungC + " &degC";
    } else {

    }
}
function reset() {
}