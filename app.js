//! benim çözümüm  
let bingo = Math.floor(Math.random()*101)

for (let i=1; i<=5; ++i){
    let hak = +prompt("0 ile yüz arasında bir tahminde bulunun")

    if((hak===bingo)){
        alert(`Bingo!!! Tebrikler doğru sayı ${hak} ile tahmin ettiniz.`)
        break;
    }
    else if(hak>bingo){
    alert("Daha küçük bir sayı giriniz." );
    }

    else if (hak<bingo){
        alert("Daha büyük bir sayı giriniz." );
    }
    if(i===5){
        alert(`Üzgünüm, tahmin hakkınız bitti. Doğru sayı ${bingo} idi.`)
    }}

//?bazı değişiklikler yapılabilir?
    // }
    // let bingo = Math.floor(Math.random() * 101); // 0 ile 100 arasında rastgele bir tam sayı

    // for (let i = 1; i <= 5; ++i) {
    //     let tahmin = prompt("0 ile 100 arasında bir tahminde bulunun");
    //     let hak = parseInt(tahmin, 10); // Kullanıcıdan alınan string değeri tamsayıya çevir
    
    //     if (hak === bingo) {
    //         alert(`Bingo!!! Tebrikler doğru sayı ${hak} tahmin ettiniz.`);
    //         break;
    //     } else if (hak > bingo) {
    //         alert("Daha küçük bir sayı giriniz. " + (5 - i) + " hakkınız kaldı");
    //     } else if (hak < bingo) {
    //         alert("Daha büyük bir sayı giriniz. " + (5 - i) + " hakkınız kaldı");
    //     }
    //     if (i === 5) {
    //         alert(`Üzgünüm, tahmin hakkınız bitti. Doğru sayı ${bingo} idi.`);
    //     }
    // }




//! chatgpt çözümü//
// Oyun sabitleri
// const MAX_ATTEMPTS = 5;
// const MAX_NUMBER = 100;

// // Rastgele sayıyı oluştur
// const secretNumber = Math.floor(Math.random() * (MAX_NUMBER + 1)); 

// // Kullanıcıya oyunu açıklayan bir mesaj göster
// alert(`0 ile ${MAX_NUMBER} arasında bir sayı tahmin edin. Toplam ${MAX_ATTEMPTS} hakkınız var.`);

// // Tahmin döngüsü
// for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
//     const guess = parseInt(prompt(`Tahmininiz nedir?`), 10);
//     const attemptsRemaining = MAX_ATTEMPTS - attempt;

//     if (guess === secretNumber) {
//         alert(`Bingo!!! Tebrikler doğru sayı ${guess} tahmin ettiniz.`);
//         break;
//     } else if (guess > secretNumber) {
//         alert(`Daha küçük bir sayı giriniz. ${attemptsRemaining} hakkınız kaldı.`);
//     } else {
//         alert(`Daha büyük bir sayı giriniz. ${attemptsRemaining} hakkınız kaldı.`);
//     }

//     if (attempt === MAX_ATTEMPTS) {
//         alert(`Üzgünüm, tahmin hakkınız bitti. Doğru sayı ${secretNumber} idi.`);
//     }
// }
//?ali mert
// const number = Math.round(Math.random() * 101);
// let right = 5;
// while (right > 0) {
//   guess = Number(prompt("Lütfen 0-100 arasında bir sayı tahmin ediniz:"));
//   if(isNaN(guess)) {
//     alert('Gecerli sayi gir kole')
//   }
//   right--;
//   if (guess == number) {
//     alert(`Tebrikler doğru tahmin, sayi : ${number}`);
//     break;
//   } else if (right == 0) {
//     alert(
//       `Oyun bitti maalesef başka hakkınız kalmadı doğru sayi ${number} idi`
//     );
//     break;
//   } else if (guess > number) {
//     alert(
//       `Yanlış tahmin. ${right} hakkınız kaldı. Daha küçük bir sayı giriniz:`
//     );
//   } else if (guess < number) {
//     alert(
//       `Yanlış tahmin. ${right} hakkınız kaldı. Daha büyük bir sayı giriniz:`
//     );
//   }
// }
//? seda
// let devam;
// do {
//     let random = Math.round(Math.random() * 100);
//     alert('Sayı tahmin oyununa hoş geldiniz. Hadi başlayalım!!!');
//     let hak = 1;
//     while (hak < 6) {
//         let tahmin = +prompt('Sayıyı tahmin ediniz');
//         if (tahmin === random) {
//             devam = prompt(`Tebrikler ${hak}. hakkınızda bildiniz! Tekrar oynamak ister misiniz? (evet/hayır)`).toLowerCase();
//             break;
//         } else if (tahmin > random) {
//             hak + 1 === 6 ? devam = prompt('Hakkınız bitti, Tekrar oynamak ister misiniz? (evet/hayır)').toLowerCase() : alert(`Aşağı inin. Kalan hakkınız ${5 - hak}`);
//         } else if (tahmin < random) {
//             hak +1 === 6 ? devam = prompt('Hakkınız bitti, Tekrar oynamak ister misiniz? (evet/hayır)').toLowerCase() : alert(`Yukarı çıkın. Kalan hakkınız ${5 - hak}`);
//         }
//         hak++;
//     }
// } while (devam === 'evet');
// if(devam === 'hayır') {
//     alert('Teşekkür ederiz. Hoşçakal!');
// }

//?yüksel
// const number = Math.round(Math.random() * 101);
// let right = 5;
// while(right > 0){
//     guess = Number(prompt("Lütfen 0-100 arasında bir sayı tahmin ediniz:"));
//     right--
//     if(guess == number){
//         alert(`Tebrikler doğru tahmin, sayi : ${number}`)
//         break
//     } else if(right == 0){
//         alert(`Oyun bitti maalesef başka hakkınız kalmadı doğru sayi ${number} idi`)
//         break
//     } else if(guess > number){
//         alert(`Yanlış tahmin. ${right} hakkınız kaldı. Daha küçük bir sayı giriniz:`)
//     } else if(guess < number){
//         alert(`Yanlış tahmin. ${right} hakkınız kaldı. Daha büyük bir sayı giriniz:`)
//     }
// }