//Kullanıcının adını alarak ekranda yazdırıyor.
let userName = prompt("Adınız nedir?");
let firstName = document.querySelector("#name");
firstName.innerHTML = `${userName}`;
//Kullanıcının adını alarak ekranda yazdırıyor.

//Saat,dakika ya da saniye tek haneli ise başına 0 ekliyor.
function addZero(timeValue) {
  if (timeValue / 10 < 1) {
    timeValue = "0" + timeValue;
  }
  return timeValue;
}
//Saat,dakika ya da saniye tek haneli ise başına 0 ekliyor.

//Ekrana zamanı yazdırıyor ve her bir saniyede yeniliyor.
let timer;
function showTime() {
  let time = new Date();
  let second = addZero(time.getSeconds());
  let minute = addZero(time.getMinutes());
  let hour = addZero(time.getHours());
  let day = time.getDay();

  switch (day) {
    case 0:
      day = "Pazar";
      break;

    case 1:
      day = "Pazartesi";
      break;

    case 2:
      day = "Salı";
      break;

    case 3:
      day = "Çarşamba";
      break;

    case 4:
      day = "Perşembe";
      break;

    case 5:
      day = "Cuma";
      break;

    case 6:
      day = "Cumartesi";
      break;
  }

  let clock = document.querySelector("#clock");
  clock.innerHTML = `${hour}:${minute}:${second}  ${day}`;

  timer = setTimeout(showTime, 1000);
}
//Ekrana zamanı yazdırıyor ve her bir saniyede yeniliyor.
