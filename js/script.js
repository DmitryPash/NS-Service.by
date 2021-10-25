
// let reg = /[A-Za-za-Яа-яËë]/g;

// const changeHandler = (e) => {
//   const value = e.value;
//   e.value = value.replace(reg, "");
// };


let inputBtns = document.querySelectorAll(".item-add-button");

plus = input =>{
  return (() =>{
    input.value++;
  })
}
minus = input => {
  return(() => {
    input.value > 1 ? input.value-- : false
  })
}

inputBtns.forEach((element) => {
  let plusBtn = element.querySelector(".btn-plus");
  let minusBtn = element.querySelector(".btn-minus")
  let inputForm = element.querySelector(".input");
  minusBtn.addEventListener('click', minus(inputForm))
  plusBtn.addEventListener('click', plus(inputForm))
});



