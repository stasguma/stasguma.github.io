(function ($) {
   $.fn.carousel = function () {
      var leftBtn = $('.carousel-arrow-left');
      var rightBtn = $('.carousel-arrow-right');
      var elementsList = $('.carousel-list');

      var pixelsOffset = 125;
      var currentLeftValue = 0;
      var elementsCount = elementsList.find('li').length;
      var maximumOffset = - ((elementsCount - 5) * pixelsOffset);
      var minimumOffset = 0;

      leftBtn.click(function() {
         if (currentLeftValue < minimumOffset && currentLeftValue >= maximumOffset) {
            currentLeftValue += 125;
      		elementsList.animate({ left : currentLeftValue + "px"}, 500);
         } else {
            currentLeftValue = maximumOffset;
            elementsList.animate({ left : maximumOffset + "px"}, 500);
         }
      });

      rightBtn.click(function() {
         if (currentLeftValue > maximumOffset && currentLeftValue <= minimumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
         } else {
            currentLeftValue = minimumOffset;
            elementsList.animate({ left : minimumOffset + "px"}, 500);
         }
      });

      return this;
   };

   // console.log("work");
})(jQuery);

$('body').carousel();
