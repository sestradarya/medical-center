function getTimes() {
  const min = 9;
  const max = 16;

  const arr = new Array(4).fill(null);
  return [
    ...new Set(
      arr
        .map(() => {
          return Math.floor(Math.random() * (max - min + 1) + min);
        })
        .sort(function (a, b) {
          return a - b;
        })
    ),
  ];
}

document.getElementById("form").innerHTML = `
    <button type="button" class="cancle" id="cancle-button"><i class="fa-solid fa-xmark"></i></button>
                <fieldset>
                    <legend> Записаться на консультацию</legend>
                    <input id="name" type="text" name="field1" placeholder="Ваше имя *" required>
                    <input id="phone" type="text" name="field2" placeholder="Ваш номер телефона *" required>
                    <input id="email" type="email" name="field2" placeholder="Ваш еmail">
                    
                    <label for="service">Услуга: *</label>
                    <select id="service" name="field4" required>
                        <optgroup label="Консультации">
                            <option value="dermatolog">Дерматовенеролог(первичная)</option>
                            <option value="dermatolog">Дерматовенеролог(повторная)</option>
                            <option value="dermatolog">Дерматовенеролог(выездная)</option>
                            <option value="alergolog">Алерголог(повторная)</option>
                            <option value="alergolog">Алерголог(первичная)</option>
                            <option value="tricholog">Трихолог(повторная)</option>
                            <option value="tricholog">Трихолог(первичная)</option>
                            <option value="podolog">Подолог</option>
                            <option value="cosmetolog">Косметолог</option>
                        </optgroup>
                        <optgroup label="Косметология">
                            <option value="cosmetolog">Чистка лица</option>
                            <option value="cosmetolog">Чистка спины</option>
                            <option value="cosmetolog">Уход для лица</option>
                            <option value="cosmetolog">Мезо/Карбокси-терапия</option>
                            <option value="cosmetolog">Пилинг</option>
                        </optgroup>
                        <optgroup label="Аппаратное лечение">
                            <option value="cosmetolog">Плазмотерапия</option>
                            <option value="cosmetolog">SMAS лифтинг</option>
                            <option value="cosmetolog">Микросклеротерапия</option>
                            <option value="cosmetolog">Склеротерапия</option>
                            <option value="cosmetolog">Ультразвуковое лечение</option>
                            <option value="cosmetolog">Криомассаж</option>
                        </optgroup>
                        <optgroup label="Подология">
                            <option value="podolog">Аппаратный педикюр</option>
                            <option value="podolog">Обработка пальцев</option>
                            <option value="podolog">Обработка стоп</option>
                            <option value="podolog">Медицинский педикюр</option>
                            <option value="podolog">Установка титановой нитки</option>
                            <option value="podolog">Установка скоби Фрезера</option>
                        </optgroup>
                    </select>

                    <label for="doctor">Врач: </label>
                    <select id="doctor" name="field3" ></select>
                    
                    <label for="date">Дата: *</label>
                    <input type="date" id="date" name="date" min=${
                      getRegDates()[0]
                    } max=${getRegDates()[13]}>

                    <label for="time">Время: *</label>
                    <select id="time" name="field3">
                        <option value="00">00:00</option>
                    </select>

                   
                </fieldset>
                <textarea id="extra-info" name="field5" placeholder="Дополнительная информация"></textarea>

                <input type="submit" value="Отправить заявку" id="submit-button" />

                <h1 class='warning' id='warning'></h1>
    `;

const signInButton = document.getElementById("sign-in-button");

const dateField = document.getElementById("date");
const timeField = document.getElementById("time");
const formEl = document.getElementById("form");
const submitButton = document.getElementById("submit-button");
const emailField = document.getElementById("email");
const nameField = document.getElementById("name");
const phoneField = document.getElementById("phone");
const serviceField = document.getElementById("service");
const doctorField = document.getElementById("doctor");
const extraInfoField = document.getElementById("extra-info");
const cancleButton = document.getElementById("cancle-button");

let service = "dermatolog";
let fullInfo = {};

serviceField.addEventListener("change", () => {
  service = serviceField.value;
  setDoctorsEl();
});

setDoctorsEl();

signInButton.addEventListener("click", () => {
  formEl.style.display = "block";
  document.querySelector(".body").style.opacity = ".3";
});

// function sendEmail() {
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "nguendarina@gmail.com",
//         Password: "meyunrddemkozxrc",
//         To: 'nguendarina1@gmail.com',
//         From: "nguendarina@gmail.com",
//         Subject: "medical center Chamomile",
//         Body: "Sends!",
//     }).then(
//         message => alert("mail sent successfully")
//     );
// }

cancleButton.addEventListener("click", () => {
  formEl.style.display = "none";
  document.querySelector(".body").style.opacity = "1";
});

// function getSelectedDates() {
//   const arr = [];
//   for (let date of dateField.value) {
//     arr.push(date.label);
//   }
//   return arr;
// }

function getSelectedDoctors() {
  const arr = [];
  for (let doctor of doctorField.selectedOptions) {
    arr.push(doctor.label);
  }
  return arr;
}

function getRegDates() {
  let start = Date.now();
  let days = 14;
  let dates = [];
  for (let i = 0; i < days; i++)
    dates.push(
      new Date(start + i * 1000 * 60 * 60 * 24).toLocaleString().split(",")[0]
    );

  const newDates = dates.map((date) => {
    return date.split(".").reverse().join("-");
  });
  return newDates;
}

function setDoctorsEl() {
  let doctorsArr =
    service === "podolog"
      ? ["Васильева Светлана Валентиновна"]
      : service === "dermatolog"
      ? [
          "Іванченко Галина Николаевна",
          "Захарчук Любовь Васильевна",
          "Середа Георгий Андреевич",
          "Броваренко Алла Васильевна",
        ]
      : service === "tricholog"
      ? ["Дмитренко Оксана Михайловна"]
      : service === "alergolog"
      ? ["Ковальчук Юрий Борисович"]
      : service === "cosmetolog"
      ? ["Бутова Анастасия Валерьевна", "Юрьева Анна Вячеславовна"]
      : [];

  let string = "";
  for (let doctor of doctorsArr) {
    string += `<option value="">${doctor}</option>`;
  }
  doctorField.innerHTML = string;
}

function setTimesEl() {
  let string = "";
  for (let time of getTimes()) {
    const formattedTime = `${time}:00`;
    string += `<option value="">${formattedTime}</option>`;
  }
  timeField.innerHTML = string;
}

dateField.addEventListener("change", () => {
  setTimesEl();
});

export default function getInfoString() {
  return {
    name: nameField.value,
    phone: phoneField.value,
    email: emailField.value,
    service: serviceField.options[serviceField.selectedIndex].text,
    date: dateField.value,
    time: timeField.options[timeField.selectedIndex].text,
    doctors: getSelectedDoctors(),
    extraInf: extraInfoField.value,
  };
}

const validatePhoneNumber = (number) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;
  return re.test(number);
};

phoneField.addEventListener("keyup", (event) => {
  if (validatePhoneNumber(event.target.value)) {
    phoneField.style.color = "green";
  } else phoneField.style.color = "rgb(154, 3, 3)";
});

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

emailField.addEventListener("keyup", (event) => {
  if (validateEmail(event.target.value)) {
    emailField.style.color = "green";
  } else emailField.style.color = "rgb(154, 3, 3)";
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  fullInfo = getInfoString();
  const appInfo = getInfoString();
  console.log(appInfo);
  if (
    validateEmail(emailField.value) === false ||
    validatePhoneNumber(phoneField.value) === false
  ) {
    document.getElementById("warning").innerText =
      "Заполните все поля корректно";
  } else if (
    appInfo.name !== "" &&
    appInfo.phone !== "" &&
    appInfo.service !== "" &&
    appInfo.date !== ""
  ) {
    document.getElementById("warning").innerText = "";
    setTimeout(() => {
      document.getElementById("form").classList.add("finish");
      document.getElementById("form").innerHTML = `
        <div class=''>
            <h1>Ваша заявка принята, Спасибо!</h1>
        </div>
    `;
      setTimeout(() => {
        document.getElementById("form").style.display = "none";
        document.querySelector(".body").style.opacity = "1";
      }, 3000);
    }, 800);
  } else {
    document.getElementById("warning").innerText =
      "Заполните все обязательные поля";
  }
});
