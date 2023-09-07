console.log("Buatlah sebuah program JavaScript sederhana yang memungkinkan pengguna untuk mengelola saldo bank dengan menggunakan fungsi-fungsi tambahSaldo() kurangiSaldo");
console.log(' ');
console.log(' ');

console.log("###    PROGRAM MENGELOLA SALDO BANK    ###");
alert("Selamat Datang di Program Mengelola Saldo Bank!");
console.log(' ')

let saldonya = 0;
console.log(`Saldo yang anda miliki sebesar Rp${saldonya}`);

function tambahSaldo (a) {
    a = +a;
    saldonya += a
    let plus = `Saldo yang ingin ditambahkan sebesar: Rp${+a} dan saldo total menjadi sebesar: Rp${saldonya}`;
    return plus;
}

function kurangiSaldo (b) {
    b = +b;
    saldonya -= b;
    let minus = `Saldo yang ingin dikurangkan sebesar : Rp${+b} dan saldo total menjadi sebesar: Rp${saldonya}`;
    return minus;
}

let repeat = true;
do {
    let userInput = window.prompt(`Silakan memilih langkah berikutnya! 
ketik y=Menambah Saldo  
      n=Mengurangi Saldo`);
    
     let answer = userInput;

    switch (answer) {
        case "y":
            console.log(tambahSaldo(window.prompt("Silakan masukkan saldo yang ingin ditambahkan.")));
            break;
        case "Y":
            console.log(tambahSaldo(window.prompt("Silakan masukkan saldo yang ingin ditambahkan.")));
            break;
        case 'n' :
            console.log(kurangiSaldo(window.prompt("Silakan masukkan saldo yang ingin dikurangkan.")));
            break;
        case 'N' :
            console.log(kurangiSaldo(window.prompt("Silakan masukkan saldo yang ingin dikurangkan.")));
            break;
        default : 
            console.log('Error');
    }
    repeat = window.confirm('Apakah Anda akan mengulangi program ini?');
} while (repeat);



// if (answer == 'y' || 'Y') {
//     console.log(tambahSaldo(window.prompt("Silakan masukkan saldo yang ingin ditambahkan.")));
// } else if (answer == 'n' || 'N' ) {
//     console.log(kurangiSaldo(window.prompt("Silakan masukkan saldo yang ingin dikurangkan.")));
// } else {
//     console.log('error');
// }




