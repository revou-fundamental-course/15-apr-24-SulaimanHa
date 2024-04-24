// ini File JS

let isReverse = true;

function reverse() {

    let CtoF = document.getElementById('CtoF');
    let FtoC = document.getElementById('FtoC');

    if (isReverse) {
        console.log(isReverse);
        FtoC.style.display = "block";
        CtoF.style.display = "none";
        isReverse = false;
    } else {
        console.log(isReverse);
        FtoC.style.display = "none";
        CtoF.style.display = "block";
        isReverse = true;
    }
}

function convertC() {
    let angkaCel = document.getElementById("angkaCel").value;
    if(isNaN(angkaCel)){
        alert("Tolong Input Angka saja");
    }
    console.log(angkaCel);

    let hitungF = (angkaCel*9/5)+32;

    document.getElementById("hasilFah").value=hitungF;
}

function convertF() {
    let angkaFah = document.getElementById("angkaFah").value;
    if(isNaN(angkaFah)){
        alert("Tolong Input Angka saja");
    }
    console.log(angkaFah);

    let hitungC = (angkaFah-32)*5/9;

    document.getElementById("hasilCel").value=hitungC;
}