// انتظار برای لودینگ به مدت 5 ثانیه
setTimeout(function() {
    // مخفی کردن لودینگ و نمایش محتوای صفحه
    const loaderDiv = document.querySelector('.loaderDiv');
    const main=document.querySelector('main');
    const header = document.querySelector('header');

    loaderDiv.style.display = 'none';
    header.style.display = 'flex';
    main.style.display="flex";
}, 3000);


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
//  BMI calculation

const calculateBtn = document.querySelector('.calculateBtn');
const weightInput = document.querySelector('.weight');
const heightInput = document.querySelector('.height');
const resultParagraph = document.querySelector('.result');
const user = document.querySelector('.user')
const womanGender = document.querySelector('.female input')
const manGender = document.querySelector('.male > input')
const mare19Age = document.querySelector('.ageMore19>input')
const leasThan19 = document.querySelector('.leasThan19>input')

// وقتی روه دکمه محاسبه کلیک میشه
calculateBtn.addEventListener('click', function () {
    // مقدار را از اینپوت با تایپ عدد میگیرد
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
// شرط میزاریم میگیم اگر اینپوت قد خالی بود ارور بده زیرا که مخرج کسر نباید منفی 
// اگر هم یکی از اینپوت ها خالی باشند ارور میده
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        // فرموا محاسبه شاخص توده بدنی
        // وزن بر واحد کیلو گرم
        // قد بر واحد متر
        // فرمول = وزن تقسیم بر قد به توان 2
        const bmi = weight / (height * height);
        resultParagraph.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
        user.textContent = `وضعیت:${satuse(bmi.toFixed(2))}`;
    } else {
        resultParagraph.textContent = "Please enter valid weight and height.";
    }
});

// این فانکشن برای این که وضعیت سلامتی فرد را مشخص کند
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
        user = "چاق شدید لطفا در اولین فرصت به فکر کاهش وزن خود باشید"
    }
    return user
}


// ------------------تبدیل واحد----------------------
const leanght = document.querySelector(".leaghnt")
const unitForm=document.querySelector("#unitForm")
// فرم که سابمیت شد محسبه را شروع میکند
unitForm.addEventListener("submit",convertToMeters)
// فانکشن برای محاسبه
function convertToMeters(e) {
    // مقدار داخل اینپوت را به عدد میگیرد
    let unit = parseFloat(document.getElementById("unit").value);
    // متغییر برای پیدا کردن واحد مقداری که میخوایم تبدیل کنیم
    const unit01 = document.querySelector('#unit01').value;
    // متغییر برای پیدا کردن واحد مقداری که میخوایم تبدیل بشه
    console.log(unit01);
    const unit02 = document.querySelector('#unit02').value
    // اگر مقداری که میخوایم تبدیل کنیم کیلوگرم باشه 
    if (unit01=="kilometer") {
        // تگر مقداری که میخوایم تبدیل بشه متر باشه
        if (unit02=="meter02") {
            leanght.textContent=kmToMeter()
            // تگر مقداری که میخوایم تبدیل بشه سانتی متر باشه
        }else if (unit02=="cm02") {
            console.log("km to cm");
            leanght.innerHTML= kmToCm()
            // کیلو متر
        }else if (unit02=="kilometer02"){
            leanght.textContent= unit
        }
        // اگر مقداری که میخوایم تبدیل کنیم متر باشه 
    }else if (unit01=="meter") {
        // تگر مقداری که میخوایم تبدیل بشه متر باشه
        if (unit02=="meter02") {
            leanght.textContent=unit
            // تگر مقداری که میخوایم تبدیل بشه سانتی متر باشه
        }else if (unit02=="cm02") {
            leanght.textContent= mToCm()
            // تگر مقداری که میخوایم تبدیل بشه کیلو متر باشه
        }else if (unit02=="kilometer02"){
            leanght.textContent= mToKm()
        }
        // اگر مقداری که میخوایم تبدیل کنیم سانتی متر باشه 
    }else if (unit01=="cm") {
        // تگر مقداری که میخوایم تبدیل بشه متر باشه
        if (unit02=="meter02") {
            leanght.textContent=cmToMeter()
            // تگر مقداری که میخوایم تبدیل بشه سانتی متر باشه
        }else if (unit02=="cm02") {
            leanght.textContent= unit
            // تگر مقداری که میخوایم تبدیل بشه کیلو متر باشه
        }else if (unit02=="kilometer02"){
            leanght.textContent= cmToKilometer()
        }
    }
    // برای اینکخ بعد از سابمیت شدن  صفحه رفرش نشه
    e.preventDefault()
}
// فانکشن تبدیل کیلو گرم به متر
function kmToMeter(e) {

    let unit = parseFloat(document.getElementById("unit").value);
    let meter = unit * 1000;
    return meter
}
// فانکشن تبدیل کیلو گرم به سانتی متر
function kmToCm() {
    let unit = parseFloat(document.getElementById("unit").value);
    let cm = unit * 100000 ;
    return cm
}
// فانکشن تبدیل  متر به سانتی متر
function mToCm() {
    let unit = parseFloat(document.getElementById("unit").value);
    let cm = unit * 100 ;
    return cm
}
// فانکشن تبدیل  متر به کیلو متر
function mToKm() {
    let unit = parseFloat(document.getElementById("unit").value);
    let km = unit / 1000 ;
    return km
}
//  فانکشن تبدیل  سانتی متر به متر
function cmToMeter() {
    let unit = parseFloat(document.getElementById("unit").value);
    let meter = unit / 100 ;
    return meter
}
//  فانکشن تبدیل  سانتی متر به کیلو متر
function cmToKilometer() {
    let unit = parseFloat(document.getElementById("unit").value);
    let km = unit * 1000000 ;
    return km
}



let Second = document.querySelector('#Second')
let minutes = document.querySelector('#minutes')
let hour = document.querySelector('#hour')
let unitConversion = document.querySelector('#unitConversion')
let UnitList = document.querySelector('#unitConversion ul > li ul')
let unit = document.querySelector('#unit')

UnitList.addEventListener('click', unitChanger)
unitConversion.addEventListener('submit', www)

function unitChanger(e) {
    let unitValue = e.target.textContent
    unit.innerHTML = unitValue
}

function www(e) {
    let unitValue = unit.textContent
    let valueinput = Second.value
    if (unitValue == 'Second') {
        let hour = (valueinput / 3600).toFixed()
        let IntegerHour = (valueinput / 3600) - hour
        let tensOfMinutes = (IntegerHour * 0.6).toFixed(2)[2];
        let aFewMinutes = (IntegerHour * 0.6).toFixed(2)[3];
        let khoroji = `${hour} : ${tensOfMinutes} ${aFewMinutes}`
        // /\/\/\/\/\/\/\/\/\/\/\/\/\
        let minutes = valueinput / 60
        let IntegerMinutes = minutes.toFixed()
        let decimalNumberSeconds = minutes - IntegerMinutes
        let tensOfSeconds = (decimalNumberSeconds * 0.6).toFixed(2)[3];
        let OneHundredSeconds = (decimalNumberSeconds * 0.6).toFixed(2)[4];
        let khoroji2 = `${IntegerMinutes} : ${tensOfSeconds} ${OneHundredSeconds}`
        aaa(khoroji, khoroji2)
    } else if (unitValue == 'minutes') {
        let hour = (valueinput / 60)
        let IntegerHour = (valueinput / 60) - hour.toFixed()
        console.log(IntegerHour * 0.6);
        let tensOfMinutes = (IntegerHour * 0.6).toFixed(2)[3];
        let aFewMinutes = (IntegerHour * 0.6).toFixed(2)[4];
        let khoroji = `${hour} : ${tensOfMinutes} ${aFewMinutes}`
        // /\/\/\/\/\/\/\/\//\/\/\/\/\/\/
        let Second = (valueinput * 60).toFixed()
        let decimalNumberSecond = (valueinput * 60) - Second
        let tensOfSeconds = (decimalNumberSecond * 0.6).toFixed(2)[2];
        let aUnitOfOneSecond = (decimalNumberSecond * 0.6).toFixed(2)[3];
        let khoroji2 = `${Second} : ${tensOfSeconds} ${aUnitOfOneSecond}`
        bbb(khoroji, khoroji2)
    } else if (unitValue == 'hour') {
        let hour = (valueinput * 60)
        // /\/\/\/\/\/\/\/\/\/\/\/\/\/\
        let Second = (valueinput * 3600)
        ccc(hour, Second)
    }
    e.preventDefault()
}

function aaa(x, y) {
    console.log(x,'=>', y);
}
function bbb(x, y) {
    console.log(x,'=>', y);
}
function ccc(x, y) {
    console.log(x,'=>', y);
}