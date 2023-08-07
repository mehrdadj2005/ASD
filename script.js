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