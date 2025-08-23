$(function () {

    $('.menu-opener').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.navbar').toggleClass('active');
    });


    $('.value').each(function () {
        let $this = $(this);
        let countTo = parseInt($this.attr('akhi'));
        
        $({ countNum: 0 }).animate(
            { countNum: countTo },
            {
                duration: 2000, // 2 sekund
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            }
        );
    });


    // stickiy header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('header').addClass("sticky");
        }
        else {
            $('header').removeClass("sticky");
        }
    });






});

SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 800,
    // Размер шага в пикселях 
    stepSize         : 75,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 30,  
    // Максимальное ускорение
    accelerationMax   : 2,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
})



$(document).ready(function () {
  const items = $(".solution-item");
  const images = $(".solution-img img");

  function checkActive() {
    let windowMiddle = $(window).scrollTop() + $(window).height() / 2;

    items.each(function (i) {
      let itemTop = $(this).offset().top;
      let itemBottom = itemTop + $(this).outerHeight();

      if (windowMiddle >= itemTop && windowMiddle < itemBottom) {
        if (!$(this).hasClass("active")) {
          items.removeClass("active");
          $(this).addClass("active");

          images.removeClass("active").eq(i).addClass("active");
        }
      }
    });
  }

  // scroll eventda darhol tekshir
  $(window).on("scroll", checkActive);

  checkActive(); // sahifa yuklanganda ham ishlasin
  
});


