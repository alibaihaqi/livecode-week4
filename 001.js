/*
==================================
Array Mastery: Who's the winner?
==================================
Nama:________
[INSTRUKSI]
Ada dua tim, Gryffindor dan Slytherin yang sedang bertarung pada sebuah kompetisi futsal.
Function whosTheWinner akan menerima suatu parameter beruapa array berisikan nama
tim yang sudah mencetak gol. Apabila pada array jumlah "Gryffindor" lebih banyak
daripada "Slytherin" maka function akan mereturn "Gryffindor Juara Futsal Hogwarts 2018".
Sedangkan jika jumlah "Slytherin" lebih banyak daripada "Gryffindor" maka function
akan mereturn "Slytherin Juara Futsal Hogwarts 2018". Jika jumlah kedua tim sama,
maka function akan mereturn "Draw, pertandingan akan dilanjutkan dengan penalty kick!"

Let's start our own wizardy, shall we?

[RULE]
- Wajib menuliskan algoritma/pseudocode. Tidak ada algoritma/pseudocode atau
  algoritma/pseudocode tidak match dengan kode maka indikasi soal tidak
  diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!

*/

/* 1. Pseudocode Soal-1
FUNCTION whosTheWinner with parameter `goals`
  STORE and SET `nilaiGryffindor` to 0
  STORE and SET `nilaiSlytherin` to 0

  FOR each `i` in Number from 0 to length of `goals` AND increment each round THEN
    IF `goals` array `i` EQUAL to `Gryffindor` THEN
      STORE and SET `nilaiGryffindor` + 1
    ELSE
      STORE and SET `nilaiSlytherin` + 1
    END IF

  STORE and SET `hasil` to ``
  IF `nilaiGryffindor` > `nilaiSlyherin` THEN
    SET hasil` to `Gryffindor Juara Futsal Hogwarts 2018`
  ELSE IF `nilaiGryffindor` EQUAL `nilaiSlyherin` THEN
    SET `hasil` to `Draw, pertandingan akan dilanjutkan dengan penalty kick!`
  ELSE
    SET `hasil` to `Slytherin Juara Futsal Hogwarts 2018`
  END IF

  RETURN `hasil`

END FUNCTION

*/
function whosTheWinner(goals) {
  var nilaiGryffindor = 0;
  var nilaiSlytherin = 0;

  for (var i = 0; i <= goals.length - 1; i++) {
    if (goals[i] === 'Gryffindor') {
      nilaiGryffindor += 1;
    }
    else {
      nilaiSlytherin += 1;
    }
  }

  var hasil = '';
  if (nilaiGryffindor > nilaiSlytherin) {
    hasil = 'Gryffindor Juara Futsal Hogwarts 2018';
  }
  else if (nilaiGryffindor === nilaiSlytherin) {
    hasil = 'Draw, pertandingan akan dilanjutkan dengan penalty kick!';
  }
  else {
    hasil = 'Slytherin Juara Futsal Hogwarts 2018';
  }

  return hasil;
  // your code here
}

// TEST CASES
console.log(whosTheWinner(["Gryffindor", "Slytherin", "Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Gryffindor", "Slytherin", "Slytherin", "Gryffindor"])); // "Gryffindor Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Slytherin"])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner([])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner(["Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
