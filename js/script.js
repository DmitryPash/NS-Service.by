const FARBA = {
	//lazy load для сторонних либ
	lazyLibraryLoad(scriptSrc,linkHref,callback) {
    let script
    const domScript = document.querySelector(`script[src="${scriptSrc}"]`)

    if (!domScript) {
      script = document.createElement('script');
      script.src = scriptSrc;
      document.querySelector('body').after(script);
    }
		
	
		if (linkHref !== '') {
			let style = document.createElement('link');
			style.href = linkHref;
			style.rel = 'stylesheet';
			document.querySelector('link').before(style);
		}
    
    if (!domScript) {
      script.onload = callback
    } else {
      domScript.onload = callback
    }
	}
}

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

              

$(document).ready(function() {

  $('.recommend-tabs a').Tabs();
  
  $(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('.menu').slideToggle(200, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });

  $(".menuToggle-search").click(function() {
    $(this).toggleClass("active");
    $('.form-serach').toggleClass('visible');
  });
});
            

      
if (document.querySelector('.ui-phone-mask')) {
  FARBA.lazyLibraryLoad(
    '//cdnjs.cloudflare.com/ajax/libs/imask/6.2.2/imask.min.js',
    '',
    () => {
      const masks = document.querySelectorAll('.ui-phone-mask')
      const maskOptions = {
        mask: '+{375} (00) 000-00-00',
        lazy: false,
      }
      masks.forEach(el => {
        IMask(el, maskOptions)
      })
    }
  )
}


if (document.querySelector('.ui-slick')) {
  FARBA.lazyLibraryLoad(
    '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
    '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css',
    () => {
      $('.ui-slick').slick({
        dots: true
      }); 
    }
  )
}

        
