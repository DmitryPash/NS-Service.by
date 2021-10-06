let inputBtn = document.querySelectorAll('input')
// inputBtn.value= 0;

const minus = () =>{
    inputBtn.value > 0 ? inputBtn.value-- : false;
}
const plus = () =>{
    inputBtn.value++
}
let reg = /[A-Za-za-Яа-яËë]/g;

const changeHandler = e => {
    const value = e.value
    e.value = value.replace(reg, '')
}
