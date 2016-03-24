$(function () {

  $('#firstname').hover(function () {

    $(this).next().addClass('titletip').fadeIn();
    $('.titletip').stop(false, true);

    $(this).focus(function () {

      $('.titletip').fadeOut();
    });

  },
    function () {

      $('.titletip').fadeOut();
    }
  );

  $('#lastname').hover(function () {

    $(this).next().addClass('titletip').fadeIn();
    $('.titletip').stop(false, true);

    $(this).focus(function () {

      $('.titletip').fadeOut();
    });
  },
    function () {

      $('.titletip').fadeOut();
    }
  );

  $('#adress').hover(function () {

    $(this).next().addClass('titletip').fadeIn();
    $('.titletip').stop(false, true);

    $(this).focus(function () {

      $('.titletip').fadeOut();
    });
  },
    function () {

      $('.titletip').fadeOut();
    }
  );

});
