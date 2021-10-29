
// let reg = /[A-Za-za-Яа-яËë]/g;
// ------ /\d/g
// const changeHandler = (e) => {
//   const value = e.value;
//   e.value = value.replace(reg, "");
// };


let inputBtns = document.querySelectorAll(".item-add-button");
let input = document.querySelectorAll(".input")
let reg = /[^\d]/g;
input.forEach(element =>{
  element.oninput = function () {
    this.value = this.value.replace(reg, "")
  }
})
input.forEach(element => {
  element.value = 1;
})
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

              
              $.fn.Tabs = function() {
                var selector = this;

                this.each(function() {
                   var obj = $(this); 
                   $(obj.attr('href')).hide();
                   $(obj).click(function() {
                      $(selector).removeClass('selected');
                      
                      $(selector).each(function(i, element) {
                         $($(element).attr('href')).hide();
                      });
                      
                      $(this).addClass('selected');
                      $($(this).attr('href')).fadeIn();
                      return false;
                   });
                });

                $(this).show();
                $(this).first().click();
                if(location.hash!='' && $('a[href="' + location.hash + '"]').length)
                   $('a[href="' + location.hash + '"]').click();	
             };


             jQuery(document).ready(function($){

                $('.recommend-tabs a').Tabs();

             });




             $(document).ready(function() {
              $(".menuToggle").click(function() {
                $(this).toggleClass("active");
                $('.menu').slideToggle(300, function(){
                  if($(this).css('display') === "none"){
                    $(this).removeAttr('style');
                  }
                });
              });
              $(".menuToggle-search").click(function() {
                $(this).toggleClass("active");
                $('.search-mob').slideToggle(300, function(){
                  if($(this).css('display') === "none"){
                    $(this).removeAttr('style');
                  }
                });
              });
            });
            

            // $(document).ready(function() {
            //   $(".menuToggle-search").click(function() {
            //     $(this).toggleClass("active");
            //     $('.search-mob').slideToggle(300, function(){
            //       if($(this).css('display') === "none"){
            //         $(this).removeAttr('style');
            //       }
            //     });
            //   });
            // });
            

