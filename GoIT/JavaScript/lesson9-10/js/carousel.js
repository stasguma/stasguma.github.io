$(function () {
  var carousel = $('.jcarousel').jcarousel();

  var connector = function(itemNavigation, carousel) {
    return carousel.jcarousel('items').eq(itemNavigation.index());
  };

////////////////////////////////////
//////////////  HOVER /////////////
//////////////////////////////////

  $('.jcarousel a').hover(function () {
    if ($(this).hasClass('jcarousel-prev')) {
      $('.jcarousel-prev span').show();

    } else {
      $('.jcarousel-next span').show();

    }
  },
    function () {
      if ($(this).hasClass('jcarousel-prev')) {
        $('.jcarousel-prev span').hide();

      } else {
        $('.jcarousel-next span').hide();

      }
    });

////////////////////////////////////
////////////  NAVIGATION //////////
///////////  BUTTONS  ////////////
/////////////////////////////////

  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });

  $('.jcarousel').jcarousel({
    wrap: 'circular'
});

////////////////////////////////////
////////////  PAGINATION //////////
//////////////////////////////////

  var page = $('.jcarousel-pagination').jcarousel();

  page.jcarousel('items').each(function() {
        var item = $(this);
        var target = connector(item, carousel);

        item
            .on('jcarouselcontrol:active', function() {
                page.jcarousel('scrollIntoView', this);
                item.addClass('active');
            })
            .on('jcarouselcontrol:inactive', function() {
                item.removeClass('active');
            })
            .jcarouselControl({
                target: target,
                carousel: carousel,
            });

  });

////////////////////////////////////
///////////  PAGINATION  //////////
////////////  BUTTONS  ///////////
/////////////////////////////////

  $('.page-prev').jcarouselControl({
      target: '-=1'
   });

  $('.page-next').jcarouselControl({
      target: '+=1'
   });

});
