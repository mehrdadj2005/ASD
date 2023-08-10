// سلکت کردن اینپوت نمایش اعداد
let CalculationInput = document.querySelector('#clac')

// فانکشن دریافت اعداد و علامت های ریاضی و چاپ انها در اینپوت نمایش اعداد
function data(val) {
    CalculationInput.display.value += val;
}

// حذف تمام محتوای اینپوت نمایش اعداد
function as() {
    CalculationInput.display.value = ''
}

// اگر کاربر دکمه سی را کلیک کند 
// به صورت یکی یکی از اخر اعداد را پاک میکند
function c() {
    CalculationInput.display.value = CalculationInput.display.value.slice(0, -1);
}

// با کلیک بر دکمه مساوی
// محاسبات اعدادی که کاربر وارد کرده را انجام می دهد
function equal() {
    CalculationInput.display.value = eval(CalculationInput.display.value)
}

// ------------------------------------


const calculateBtn = document.querySelector('.calculateBtn');
const weightInput = document.querySelector('.weight');
const heightInput = document.querySelector('.height');
const resultParagraph = document.querySelector('.result');
const user = document.querySelector('.user')
const womanGender = document.querySelector('.female input')
const manGender = document.querySelector('.male > input')
const mare19Age = document.querySelector('.ageMore19>input')
const leasThan19 = document.querySelector('.leasThan19>input')

// window.addEventListener("click", (e) => {
//     if (e.target=mare19Age) {
//         console.log('woman gender');
//         leasThan19.disabled=true
//         // womanGender.disabled=false
//     }
//     if (e.target=leasThan19){
//        console.log('man gender');
//        mare19Age.disabled=true
//     }

// })

calculateBtn.addEventListener('click', function () {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const bmi = weight / (height * height);
        resultParagraph.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
        user.textContent = `وضعیت:${satuse(bmi.toFixed(2))}`;
    } else {
        resultParagraph.textContent = "Please enter valid weight and height.";
    }
});


function satuse(userStatus) {
    let user
    if (userStatus < 18.5) {
        user = 'کمبود وزن'
    } else if (userStatus <= 24.9) {
        user = "وزن نرمال"
    } else if (userStatus <= 29.9) {
        user = "اضافه وزن"
    } else if (userStatus <= 34.9) {
        user = "چاق"
    } else if (userStatus <= 39.9) {
        user = "بسیار چاق"
    } else if (userStatus >= 40) {
        user = "چاقی شدید لطفا در اولین فرصت به فکر کاهش وزن خود باشید"
    }
    return user
}


// ------------------تبدیل واحد----------------------
const leanght = document.querySelector(".leaghnt")
const bad=document.querySelector("#good")
bad.addEventListener("submit",convertToMeters)

function convertToMeters(e) {
    let unit = parseFloat(document.getElementById("unit").value);

    const unit01 = document.querySelector('#unit01').value;
    console.log(unit01);
    const unit02 = document.querySelector('#unit02').value
    console.log(unit02);
    if (unit01=="kilometer") {
        if (unit02=="meter02") {
            console.log("m02 is supported");
            leanght.textContent=kmToMeter()
        }else if (unit02=="cm02") {
            console.log("km to cm");
            leanght.innerHTML= kmToCm()
        }else if (unit02=="kilometer02"){
            leanght.textContent= unit
        }
    }else if (unit01=="meter") {
        if (unit02=="meter02") {
            leanght.textContent=unit
        }else if (unit02=="cm02") {
            leanght.textContent= mToCm()
        }else if (unit02=="kilometer02"){
            leanght.textContent= mToKm()
        }
    }else if (unit01=="cm") {
        if (unit02=="meter02") {
            leanght.textContent=cmToMeter()
        }else if (unit02=="cm02") {
            leanght.textContent= unit
        }else if (unit02=="kilometer02"){
            leanght.textContent= cmToKilometer()
        }
    }
    // let kilometers = parseFloat(document.getElementById("kilometers").value);
    // let meters = kilometers * 1000;

    // leanght.textContent =`${kilometers}کیلومتر معادل ${meters}متر است`
    e.preventDefault()
}

function kmToMeter(e) {
    // e.preventDefault()

    let unit = parseFloat(document.getElementById("unit").value);
    let meter = unit * 1000;
    return meter
}
function kmToCm() {
    let unit = parseFloat(document.getElementById("unit").value);
    let cm = unit * 100000 ;
    return cm
}
function mToCm() {
    let unit = parseFloat(document.getElementById("unit").value);
    let cm = unit * 100 ;
    return cm
}
function mToKm() {
    let unit = parseFloat(document.getElementById("unit").value);
    let km = unit / 1000 ;
    return km
}
function cmToMeter() {
    let unit = parseFloat(document.getElementById("unit").value);
    let meter = unit / 100 ;
    return meter
}
function cmToKilometer() {
    let unit = parseFloat(document.getElementById("unit").value);
    let km = unit * 1000000 ;
    return km
}

const loading = document.querySelector('.loader');

// const loader = setTimeout(load, 5000);

// function load() {
//     loading.style.display = "none"
// }