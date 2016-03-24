$(function () {

  $('.tabs').hover(function () {
    if ($(this).attr('id') === 'hover-tab--pink') {

      return;
    } else {

      $(this).attr('id', 'hover-tab').animate({opacity: 1});
    }
  },
  function () {

      clickOn = false;
        if ($(this).attr('id') !== 'hover-tab--pink') {

          $(this).removeAttr('id style');
        }
  }
  );

  var clickOn = false;

  $(".tabs").on("click", function () {

    clickOn = true;
    if ($(this).hasClass('tab2') && $(this).attr('id') === 'hover-tab' ) {

      $('.tab2').addClass('click2').attr('id', 'hover-tab--pink');
      $('.tab1').removeClass('click1').removeAttr('id');
      $('.tab3').removeClass('click3').removeAttr('id');
      $('#tab2').fadeIn();
      $('#tab1').hide();
      $('#tab3').hide();
    } else if ($(this).hasClass('tab3') && $(this).attr('id') === 'hover-tab') {

      $('.tab3').addClass('click3').attr('id', 'hover-tab--pink');
      $('.tab1').removeClass('click1').removeAttr('id');
      $('.tab2').removeClass('click2').removeAttr('id');
      $('#tab3').fadeIn();
      $('#tab1').hide();
      $('#tab2').hide();
    } else {

      $('.tab1').addClass('click1').attr('id', 'hover-tab--pink');
      $('.tab2').removeClass('click2').removeAttr('id');
      $('.tab3').removeClass('click3').removeAttr('id');
      $('#tab1').fadeIn();
      $('#tab2').hide();
      $('#tab3').hide();
    }
  });

});
