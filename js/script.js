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

function convert() {
    let angkaCel = document.getElementById("angkaCel").value;
    if(isNaN(angkaCel)){
        alert("Tolong Input Angka saja");
    }
    console.log(angkaCel);
}