$(function() {
  $(window).resize(function() {
    var num, valPlus, valPlus1, valPlus2, set, set1, set2;
    $('#fullpage').fullpage({
      //options here
      autoScrolling: true,
      scrollHorizontally: true,
      navigation: true,
      anchors: ['Home', 'About', 'Work'],
      navigationTooltips: ['Home', 'About', 'Work'],
      menu: '#myMenu',
      responsiveWidth: 1025,
      afterLoad: function() {
        var activeSection = $('.fullpage-wrapper .active');
        if (activeSection.hasClass('section1')) {

          $("#fp-nav ul li:nth-child(1)").addClass("on");

          $(".section3").removeClass("on");
          $("#fp-nav ul li:nth-child(2)").removeClass("on");
          $("#fp-nav ul li:nth-child(3)").removeClass("on");

        } else if (activeSection.hasClass('section2')) {

          $("#fp-nav ul li:nth-child(2)").addClass("on");

          $(".section3").removeClass("on");
          $("#fp-nav ul li:nth-child(1)").removeClass("on");
          $("#fp-nav ul li:nth-child(3)").removeClass("on");
        } else if (activeSection.hasClass('section3')) {
          $(".section3").addClass("on");
          $("#fp-nav ul li:nth-child(3)").addClass("on");

          $("#fp-nav ul li:nth-child(2)").removeClass("on");
          $("#fp-nav ul li:nth-child(1)").removeClass("on");
        }
      }
    });
  }).trigger("resize");

})



$(document).on('ready', function() {

  window.onscroll = function() {
    if ($(document).scrollTop() > 1) {
      $(".header").addClass("on");
    } else {
      $(".header").removeClass("on");
    }
  }

  var posY;

  function bodyFreezeScroll() {
    posY = $(window).scrollTop();
    $("html").addClass('fix');
    $("html").css("top", -posY);
  }

  function bodyUnfreezeScroll() {
    $("html").removeAttr('class');
    $("html").removeAttr('style');
    posY = $(window).scrollTop(posY);
  }

  $(".gnb_tit").click(function() {
    $('.menubar').removeClass('on');
    $('.menubar li:eq(0)').animate({
      'rotate': '0',
      'top': '0'
    }, 300)
    $('.menubar li:eq(1)').fadeIn();
    $('.menubar li:eq(2)').animate({
      'rotate': '0',
      'top': '24px'
    }, 300)
    $("body").css('overflow', 'auto');
    setTimeout(function() {
      $('.m_menu .gnb_wrap').removeClass('on');
    }, 100);
    setTimeout(function() {
      $('.m_menu').removeClass('on');
    }, 300);
  });

  // menu open
  menu_bt = 0;
  $('.menubar').click(function() {
    if (menu_bt == 0) {
      // bodyFreezeScroll();
      $('.m_menu').addClass('on');
      $('.menubar').addClass('on');
      $('.menubar li:eq(0)').animate({
        'rotate': '45deg',
        'top': '6px'
      }, 300)
      $('.menubar li:eq(1)').fadeOut();
      $('.menubar li:eq(2)').animate({
        'rotate': '-45deg',
        'top': '6px'
      }, 300)
      $("body").css('overflow', 'hidden');
      setTimeout(function() {
        $('.m_menu .gnb_wrap').addClass('on');
      }, 100);

      menu_bt = 1;
    } else if (menu_bt == 1) {
      // bodyUnfreezeScroll();
      $('.menubar').removeClass('on');
      $('.menubar li:eq(0)').animate({
        'rotate': '0',
        'top': '0'
      }, 300)
      $('.menubar li:eq(1)').fadeIn();
      $('.menubar li:eq(2)').animate({
        'rotate': '0',
        'top': '24px'
      }, 300)
      $("body").css('overflow', 'auto');
      setTimeout(function() {
        $('.m_menu .gnb_wrap').removeClass('on');
      }, 100);
      setTimeout(function() {
        $('.m_menu').removeClass('on');
      }, 300);

      menu_bt = 0;
    }
  });
});
