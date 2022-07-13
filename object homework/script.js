let your_data = confirm( 'O`zingiz haqida ma`lumot beryapsiz! Davom etish uchun OK tugmasini bosing ' )
let a = prompt( 'Ismingizni kiriting' )
let b = +prompt( 'Yoshingizni kiriting' )
let c = prompt( 'Familiyangizni kiriting' )
let d = prompt( 'Mashinangiz bormi?' )
let g = prompt( 'Bosh vaqtlaringizda nima bilan shug`ullanasiz?' )
let save = alert( 'Rahmat. Ma`lumotlaringiz saqlandi' )

let obj = {
    your_name : a,
    your_age : b,
    your_surname : c,
    isCar : d,
    hobby : g,
}

console.log(obj);