$(function () {
   $('.lvl1 li').hover(function () {
      $(this).children('a').animate({
         color: '#ff83cb'
      }, 200);
   },
      function () {
         $(this).children('a').animate({
            color: '#ffffff'
         }, 200).
               stop(false, true);
      }
   );

   $(".lvl1 > li:eq(1)").hover(function () {
      if ($(this).parent().hasClass("lvl1")) {
         $('.lvl2').slideDown(200);

      }
   },
   function () {
      $('.lvl2').slideUp(200);
   });

   $(".lvl2 > li:eq(1)").hover(function () {
      if ($(this).parent().hasClass('lvl2')) {
         $('.lvl3').slideDown(200);

      }
   },
   function () {
      $('.lvl3').slideUp(200);
   });

   $(".lvl3 > li:eq(2)").hover(function () {
      if ($(this).parent().hasClass('lvl3')) {
         $('.lvl4').slideDown(200);

      }
   },
   function () {
      $('.lvl4').slideUp(200);

   });
});
