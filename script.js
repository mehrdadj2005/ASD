const matn = [
    "کلمات قدرت زیادی دارند, لطفا مراقب باشید",
    "سال دیگه این موقع هیچ کدوم از چیزهایی که الان استرس شون رو داری کوچکترین اهمیتی نخواهند داشت",
    "به شیوه خودت زندگی کن, اینجا پشت خدا هم حرف میزنند",
    "تنها زمانی شکست میخوری که زمین بخوری و دیگه بلند نشی",
    "اگه اینقدر شجاع بودی که شروع کنی و اینقدر قوی هستی که ادامه بدی, پس اینقدر لیاقت داری که بهش برسی..."
]
const pictiers = [
    "img/matnSVG/loin.svg",
    "img/1302192-ffffff.svg"
]
const mainPictiers = [
    "img/SVG/Lifestyle Illustrations_1.svg",
    "img/SVG/Lifestyle Illustrations_2.svg",
    "img/SVG/Lifestyle Illustrations_3.svg",
    "img/SVG/Lifestyle Illustrations_4.svg",
    "img/SVG/Lifestyle Illustrations_5.svg",
    "img/SVG/Lifestyle Illustrations_6.svg",
    "img/SVG/Lifestyle Illustrations_7.svg",
    "img/SVG/Lifestyle Illustrations_8.svg",
    "img/SVG/Lifestyle Illustrations_9.svg",
    "img/SVG/Lifestyle Illustrations_10.svg",
    "img/SVG/Lifestyle Illustrations_11.svg",
    "img/SVG/Lifestyle Illustrations_12.svg"
]
const main = document.querySelector('main');
const header = document.querySelector('header');
// دیو پدر متنی که رندم میاد
const randomPage = document.querySelector('#randomPage')

// انتظار برای لودینگ به مدت 5 ثانیه
setTimeout(function () {
    // مخفی کردن لودینگ و نمایش محتوای صفحه
    const loaderDiv = document.querySelector('.loaderDiv');
    // 5ثانیه ک تمام شد لودینگ میره
    loaderDiv.style.display = 'none';
    randomPage.style.display = 'flex';
    // بعد فانکشن اجرا میشه
    showRandomMatn()
    // انتظار بعد از 3 ثانیه این فانکشن اجرا شود
    setTimeout(function () {
        randomPage.style.display = 'none';
        main.style.display = "flex";
        header.style.display = "flex"
        showRandomLeftPictier();
    }, 6000);
}, 3000);
// فانکشن برای گرفتن رندم متن
function getRandomMatn() {
    const random = Math.floor(Math.random() * matn.length);
    return matn[random];
}
// برای گرفتن رندم عکس های بالای متن
function getRandomPictier() {
    const randomPictier = Math.floor(Math.random() * pictiers.length);
    return pictiers[randomPictier];
}
const randomMatn = document.querySelector("#randomPage>div>p")
const randomPictier = document.querySelector("#randomPage>div>img");
// برای نمایش متن و عکس بالای ان در مکان درست
function showRandomMatn() {
    randomMatn.textContent = getRandomMatn()
    randomPictier.src = getRandomPictier();
}

// فانکشن برای گرفتن عکس رندم به دیو سمت چپ
function getRandomLeftPictier() {
    const random = Math.floor(Math.random() * mainPictiers.length)
    return mainPictiers[random]
}
// برای نمایش عکس رندم دیو سمت چپ
function showRandomLeftPictier(arams) {
    const leftDiv = document.querySelector(".leftDiv img");
    leftDiv.src = getRandomLeftPictier()
}

// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/
let calculatorHeader = document.querySelector('#calculator').addEventListener('click', calculator)
let mbiHeader = document.querySelector('#mbi').addEventListener('click', mbi)
let ConvertLengthUnitsHeader = document.querySelector('#ConvertLengthUnits').addEventListener('click', ConvertLengthUnits)
let ConvertTimeUnitsHeader = document.querySelector('#ConvertTimeUnits').addEventListener('click', ConvertTimeUnits)

function calculator() {
    let x = document.querySelector('#clac')
    for (let i = 0; i < 4; i++) {
        let y = document.querySelectorAll('body main  form')[i]
        y.style = 'display:none;'
    }
    x.style = 'display:block;'
}

function mbi() {
    let x = document.querySelector('#bmiForm')
    for (let i = 0; i < 4; i++) {
        let y = document.querySelectorAll('body main  form')[i]
        console.log(y);
        y.style = 'display:none;'
    }
    x.style = 'display:flex;'
}

function ConvertLengthUnits() {
    let x = document.querySelector('#unitForm')
    for (let i = 0; i < 4; i++) {
        let y = document.querySelectorAll('body main  form')[i]
        y.style = 'display:none;'
    }
    x.style = 'display:flex;'
}

function ConvertTimeUnits() {
    let x = document.querySelector('#unitConversion')
    for (let i = 0; i < 4; i++) {
        let y = document.querySelectorAll('body main  form')[i]
        y.style = 'display:none;'
    }
    x.style = 'display:block;'
}
// /\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
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
        user.textContent = `وضعیت: ${satuse(bmi.toFixed(2))}`;
    } else {
        resultParagraph.textContent = "لطفا کادر را درست پر کنید";
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
const unitForm = document.querySelector(".mohasebe1")
// فرم که سابمیت شد محسبه را شروع میکند
unitForm.addEventListener("click", convertToMeters)
// فانکشن برای محاسبه
function convertToMeters(e) {
    console.log("asd");
    // مقدار داخل اینپوت را به عدد میگیرد
    let unit = parseFloat(document.getElementById("unit").value);

    // متغییر برای پیدا کردن واحد مقداری که میخوایم تبدیل کنیم
    const unit01 = document.querySelector('#unit01').value;
    // متغییر برای پیدا کردن واحد مقداری که میخوایم تبدیل بشه
    const unit02 = document.querySelector('#unit02').value
    // if (unitInput.value ===) {

    // }
    // اگر مقداری که میخوایم تبدیل کنیم کیلوگرم باشه 
    if (unit01 == "kilometer") {
        // تگر مقداری که میخوایم تبدیل بشه متر باشه
        if (unit02 == "meter02") {
            leanght.textContent = kmToMeter()
            // تگر مقداری که میخوایم تبدیل بشه سانتی متر باشه
        } else if (unit02 == "cm02") {
            console.log("km to cm");
            leanght.textContent = kmToCm()
            // کیلو متر
        } else if (unit02 == "kilometer02") {
            leanght.textContent = unit
        }
        // اگر مقداری که میخوایم تبدیل کنیم متر باشه 
    } else if (unit01 == "meter") {
        // تگر مقداری که میخوایم تبدیل بشه متر باشه
        if (unit02 == "meter02") {
            leanght.textContent = unit
            // تگر مقداری که میخوایم تبدیل بشه سانتی متر باشه
        } else if (unit02 == "cm02") {
            leanght.textContent = mToCm()
            // تگر مقداری که میخوایم تبدیل بشه کیلو متر باشه
        } else if (unit02 == "kilometer02") {
            leanght.textContent = mToKm()
        }
        // اگر مقداری که میخوایم تبدیل کنیم سانتی متر باشه 
    } else if (unit01 == "cm") {
        // تگر مقداری که میخوایم تبدیل بشه متر باشه
        if (unit02 == "meter02") {
            leanght.textContent = cmToMeter()
            // تگر مقداری که میخوایم تبدیل بشه سانتی متر باشه
        } else if (unit02 == "cm02") {
            leanght.textContent = unit
            // تگر مقداری که میخوایم تبدیل بشه کیلو متر باشه
        } else if (unit02 == "kilometer02") {
            leanght.textContent = cmToKilometer()
        }
    }
    // برای اینکخ بعد از سابمیت شدن  صفحه رفرش نشه
    e.preventDefault()
}
// فانکشن تبدیل کیلو گرم به متر
function kmToMeter(e) {

    let unit = parseFloat(document.getElementById("unit").value);
    let meter = unit * 1000;
    return `برابر با ${meter} است`
}
// فانکشن تبدیل کیلو گرم به سانتی متر
function kmToCm() {
    let unit = parseFloat(document.getElementById("unit").value);
    let cm = unit * 100000;
    return `برابر با ${cm} است`
}
// فانکشن تبدیل  متر به سانتی متر
function mToCm() {
    let unit = parseFloat(document.getElementById("unit").value);
    let cm = unit * 100;
    return `برابر با ${cm} است`
}
// فانکشن تبدیل  متر به کیلو متر
function mToKm() {
    let unit = parseFloat(document.getElementById("unit").value);
    let km = unit / 1000;
    return `برابر با ${km} است`
}
//  فانکشن تبدیل  سانتی متر به متر
function cmToMeter() {
    let unit = parseFloat(document.getElementById("unit").value);
    let meter = unit / 100;
    return `برابر با ${meter} است`
}
//  فانکشن تبدیل  سانتی متر به کیلو متر
function cmToKilometer() {
    let unit = parseFloat(document.getElementById("unit").value);
    let km = unit * 1000000;
    return `برابر با ${km} است`
}


let Second = document.querySelector('#Second')
let minutes = document.querySelector('#minutes')
let hour = document.querySelector('#hour')
let mohasebe = document.querySelector('#mohasebe')
let unit1 = document.querySelector('#ul1')
let unit2 = document.querySelector('#ul2')
// let unit1 = document.querySelector('#unit1')
// let unit2 = document.querySelector('#unit2')


mohasebe.addEventListener('click', (e) => {
    let khorji = document.querySelector('.khorji')
    let valueinput = Second.value
    const unit01 = unit1.value;
    const unit02 = unit2.value;

    if (unit01 == "ثانیه") {
        if (unit02 == "ثانیه") {
            console.log("asd");
            khorji.textContent = valueinput
        } else if (unit02 == "دقیقه") {
            khorji.textContent = sToM()
        } else if (unit02 == "ساعت") {
            khorji.textContent = sToH()
        }
    } else if (unit01 == "دقیقه") {
        if (unit02 == "ثانیه") {
            khorji.textContent = mToS()
        } else if (unit02 == "دقیقه") {
            khorji.textContent = valueinput
        } else if (unit02 == "ساعت") {
            khorji.textContent = mToH()
        }
    } else if (unit01 == "ساعت") {
        if (unit02 == "ثانیه") {
            khorji.textContent = hTos()
        } else if (unit02 == "دقیقه") {
            khorji.textContent = hToM()
        } else if (unit02 == "ساعت") {
            khorji.textContent = valueinput
        }
    }
    e.preventDefault()

})

//  فانکشن تبدیل ثانیه به دقیقه
function sToM() {
    let unit = Second.value;
    let a = (unit / 60).toFixed(2)
    return a
}

//  فانکشن تبدیل ثانیه به ساعت
function sToH() {
    let unit = Second.value;
    let a = (unit / 3600).toFixed(2)
    return a
}

//  فانکشن تبدیل دقیقه به ثانیه
function mToS() {
    let unit = Second.value;
    let a = unit * 60
    return a
}

//  فانکشن تبدیل دقیقه به ساعت
function mToH() {
    let unit = Second.value;
    let a = (unit / 60).toFixed(2)
    return a

}

//  فانکشن تبدیل ساعت به ثانیه
function hTos() {
    let unit = Second.value;
    let a = (unit * 3600)
    return a
}

//  فانکشن تبدیل ساعت به دقیقه
function hToM() {
    let unit = Second.value;
    let a = (unit * 60)
    return a
}
