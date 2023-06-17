// if else //

/* var mahasiswa1="Budi";
var mahasiswa2="Joko";

var kelas1="JavaScript";
var kelas2="PHP";

if(mahasiswa1=="JavaScript"){
    console.log("kelas javascript yang kamu ambil berada di ruangan labor 103 kelas di mulai pada jam 10:00 am");

}
    else if(mahasiswa2="PHP"){
        console.log("kelas php yang kamu ambil berada di ruangan labor 101 kelas di mulai pada jam 01:00 pm pagi");

    }
    else{
        console.log("mohon maaf anda tidak mengambil kelas kafe koding");
    }  */

 // function //

/* function warung (kopi,gula,minyak,beras)
{
    let hargaKopi=kopi*5000
    let hargaGula=gula*4000
    let hargaMinyak=minyak*6000
    let hargaBeras=beras*16000
    let total= hargaKopi+hargaGula+hargaMinyak+hargaBeras

    return total
}
console.log('Harga untuk membeli Beras 3 gantang adalah Rp.'+ warung(0,0,0,3)) */

// array //

// const kafekoding = []
// kafekoding [0] = 'HTML'
// kafekoding [1] = 'JAVASCRIPT'
// kafekoding [2] = 'PHP'
// const php = [] 
// php [0] = 'Heru'
// php [1] = 'Riko'
// php [2] = 'Farhan'

// console.log("Kelas"+kafekoding[1]+'ada orang bernama'+php[0])

// function //
// function hitungGajiKaryawan() {
//     const gajiPerBulan = 2500000;
//     const tunjanganPertahun = 600000;
//     const bonusPerProyek = 400000;
//     const jumlahProyek = 7;
//     const tahunTanpaGaji = 6;
  
//     const totalGaji = gajiPerBulan * 12 * tahunTanpaGaji;
  
//     const totalTunjangan = tunjanganPertahun * tahunTanpaGaji;
  
//     const totalBonus = bonusPerProyek * jumlahProyek; 
  
//     const gajiKaryawan = totalGaji + totalTunjangan + totalBonus; 
  
//     return gajiKaryawan;
//   }
  
//   const gaji = hitungGajiKaryawan();
//   console.log("Gaji karyawan: Rp", gaji);

// array bersarang//
// var kelas = ["php", "javascript", "desain grafis", "ui/ux", "python", "html/css", "kotlin"];

// var mahasiswa = [
//     ["budi", "joko", "ayu", "dila", "alex"],
//     ["suci", "dona", "satria"]
// ];

// var kelasDona;
// for (var i = 0; i < mahasiswa.length; i++) {
//     if (mahasiswa[i].includes("dona")) {
//         var indexKelas = i;
//         var indexMahasiswa = mahasiswa[i].indexOf("dona");
//         kelasDona = kelas[indexKelas];
//         break;
//     }
// }

// console.log("Mahasiswa " + kelasDona + " yang bernama Dona sedang sakit.");

// array//

// var kelas = ["kelas 1", "kelas 2", "kelas 3", "kelas 4", "kelas 5", "kelas 6", "kelas 7", "kelas 8", "kelas 9", "kelas 10"];

// var kelasDipakai = 0;
// var kelasRenovasi = false;
// var kelasTidakDipakai = [];

// for (var i = 0; i < kelas.length; i++) {
//     if (i >= 0 && i <= 5) {
//         kelasDipakai++;
//     } else if (i === 7) {
//         kelasRenovasi = true;
//     } else if (i === 6 || i >= 8) {
//         kelasTidakDipakai.push(kelas[i]);
//     }
// }


// if (kelasDipakai === 6) {
//     console.log("Kelas 1-6 sedang dipakai oleh mahasiswa.");
// }

// if (kelasRenovasi) {
//     console.log("Kelas 8 sedang di renovasi.");
// }

// if (kelasTidakDipakai.length === 3) {
//     console.log("Kelas " + kelasTidakDipakai.join(", ") + " sedang tidak dipakai.");
// }
