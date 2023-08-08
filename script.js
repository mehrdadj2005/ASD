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

calculateBtn.addEventListener('click', function () {
    // متغییر وزن
    // این متد رشته را به عدد تبدیل میکند
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (height > 0) {
        const bmi = weight / (height * height);
        resultParagraph.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    } else {
        resultParagraph.textContent = "Please enter valid weight and height.";
    }
});

const loading = document.querySelector('.loader');

const loader = setTimeout(load, 5000);

function load() {
    loading.style.display = "none"
}