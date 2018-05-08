/*
======================
Where is the space?
======================
Kamu telah dilempar ke dimensi lain!
Di dunia ini, semua kalimat tidak memiliki diantara setiap katanya!

Buatlah sebuah function yang bisa membantumu mentranslate kalimat yang memiliki spasi
menjadi kalimat yang tidak ber-spasi!

Contoh ada di test case

RULES:
--------
DILARANG menggunakan built in function .split dan .join

*/

function translate (sentence) {
  var kalimatBaru = '';
  for(var i = 0; i <= sentence.length - 1; i++) {
    if (sentence[i] !== ' ') {
      kalimatBaru = kalimatBaru + sentence[i];
    }
    else {
      kalimatBaru = kalimatBaru + '';
    }
  }
  return kalimatBaru;
  // your code here
}

//TEST CASES
console.log(translate('aku ingin makan')) // akuinginmakan
console.log(translate('aku lapar')) // akulapar
console.log(translate('tolong bantu aku')) // tolongbantuaku
console.log(translate('selamatkan aku dari serangan monster')) // selamatkanakudariseranganmonster
console.log(translate('aku butuh istirahat')) // akubutuhistirahat
