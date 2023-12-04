let Konfirmasi = confirm("Start");

while(Konfirmasi == true){
    let angkaRandom = Math.floor(Math.random() * 10 + 1);

    console.log(angkaRandom);
    let masukanAngka = prompt("Tebak Angka antara 1 sampai 10");
    if(angkaRandom == masukanAngka){
        alert("Benar!!");
        Konfirmasi = confirm("Main Lagi?");
    }else if(masukanAngka < angkaRandom){
        alert("Tebakan Terlalu dikit")
    }else if(masukanAngka > angkaRandom){
        alert("Tebakan Terlalu banyak")
    }
    
    while(masukanAngka != angkaRandom && Konfirmasi == true){
        masukanAngka = prompt("Tebak Angka antara 1 sampai 10");
        if(angkaRandom == masukanAngka){
            alert("Benar!!");
        }else if(masukanAngka < angkaRandom){
            alert("Tebakan Terlalu dikit")
        }else if(masukanAngka > angkaRandom){
            alert("Tebakan Terlalu banyak")
        }
        Konfirmasi = confirm("Main lagi ?")
    }
}