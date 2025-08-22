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


//    $(window).on("scroll", function () {
//         let secTop = $(".program-sec").offset().top;
//         let secBottom = secTop + $(".program-sec").outerHeight();
//         let scroll = $(window).scrollTop();
//         let winHeight = $(window).height();

//         if (scroll + winHeight > secTop + 100 && scroll < secBottom) {
//             $(".program-left").addClass("active");
//         } else {
//             $(".program-left").removeClass("active");
//         }
//     });

//     $(window).on("scroll", function () {
//         $(".program-right").each(function () {
//             let elTop = $(this).offset().top;
//             let elBottom = elTop + $(this).outerHeight();
//             let scroll = $(window).scrollTop();
//             let winHeight = $(window).height();

//             // agar element ekranda ko‘rinsa
//             if (scroll + winHeight > elTop + 100 && scroll < elBottom - 50) {
//                 $(this).addClass("visible");
//             } else {
//                 $(this).removeClass("visible");
//             }
//         });
//     });


        // sticky sidebar
        // $(document).ready(function () {
        //     var $window = $(window);
        //     var $sidebar = $(".sidebar-shou");
        //     var $sidebarHeight = $sidebar.innerHeight();
        //     var $footerOffsetTop = $(".similar-news").offset().top;
        //     var $sidebarOffset = $sidebar.offset();

        //     $window.scroll(function () {
        //         if ($window.scrollTop() > $sidebarOffset.top) {
        //             $sidebar.addClass("fixed");
        //         } else {
        //             $sidebar.removeClass("fixed");
        //         }
        //         if ($window.scrollTop() + $sidebarHeight > $footerOffsetTop) {
        //             $sidebar.css({ "top": -($window.scrollTop() + $sidebarHeight - $footerOffsetTop) });
        //         } else {
        //             $sidebar.css({ "top": "42px", });
        //         }
        //     });
        // });


// $(document).ready(function () {
//   const items = $(".solution-item");
//   const images = $(".solution-img img");

//   function checkActive() {
//     let windowMiddle = $(window).scrollTop() + $(window).height() / 2;

//     items.each(function (i) {
//       let itemTop = $(this).offset().top;
//       let itemBottom = itemTop + $(this).outerHeight();

//       if (windowMiddle >= itemTop && windowMiddle < itemBottom) {
//         items.removeClass("active");
//         $(this).addClass("active");

//         images.removeClass("active").eq(i).addClass("active");
//       }
//     });
//   }

//   $(window).on("scroll", checkActive);
//   checkActive(); // sahifa ochilganda ham tekshir
// });


$(document).ready(function () {
  const items = $(".solution-item");
  const images = $(".solution-img img");
  let scrollTimeout;

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

  $(window).on("scroll", function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkActive, 100); // 100ms keyin ishlaydi
  });

  checkActive(); // sahifa yuklanganda ham ishlasin
});
