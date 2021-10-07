let inputBtn = document.querySelectorAll('.item-add-button > .input')
// inputBtn.value= 0;

const minus = () =>{
    inputBtn[0].value > 0 ? inputBtn[0].value-- : false;
}
const plus = () =>{
    inputBtn[0].value++
}
let reg = /[A-Za-za-Яа-яËë]/g;

const changeHandler = e => {
    const value = e.value
    e.value = value.replace(reg, '')
}

