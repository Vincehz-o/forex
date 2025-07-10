// JavaScript extracted from forex.html
(function () {
  window.Thinkific = window.Thinkific || {};

  if (false) {
    window.Thinkific.current_user = null;
    window.Thinkific.current_user.roles = [];
  } else {
    window.Thinkific.current_user = null;
  }
  window.dispatchEvent(new Event('thnc.current_user-initialized'));
})();

$(document).ready(function() {
  function dynamicHeaderHeight() {
    headerHeight = $header.outerHeight();
  }

  var $adminBar = $('.admin-notice__bar'),
      $body = $('body.home-landing-page, body.course-landing-page, body.bundle-landing-page, body.page-template, body.coming-soon-page'),
      $header = $('.header'),
      $main = $('.home-landing-page main, .course-landing-page main, .bundle-landing-page main, .page-template main, .coming-soon-page main'),
      $dropdownToggle = $('.dropdown__toggle-button'),
      $mobileButton = $('.header__mobile-button'),
      $navigation = $('.header__nav'),
      $dropdownMenu = $('.dropdown__menu');

      dynamicHeaderHeight();

  var adminBarHeight = $adminBar.outerHeight(),
      beforeHeaderHeight = $body.find('>div').nextUntil('.header').outerHeight(),
      headerTop = $header.offset().top,
      isMobile = window.matchMedia("only screen and (max-width: 767px)");

  if(adminBarHeight != NaN) {
    $body.css({
      'margin-bottom': adminBarHeight
    });
  }
  $dropdownToggle.on('click keypress', function(e) {
    if (e.which === 13 || e.type === 'click') {
      e.preventDefault();
      e.stopPropagation();
      $('.dropdown').toggleClass('open');
      $dropdownMenu.attr('aria-expanded', $dropdownMenu.attr('aria-expanded') == 'true' ? 'false' : 'true');
    }
  });
  $mobileButton.on('click keypress', function(e) {
    if (e.which === 13 || e.type === 'click') {
      e.preventDefault();
      e.stopPropagation();
      $header.attr('data-menu', $header.attr('data-menu') == 'open' ? 'closed' : 'open');
      $header.attr('aria-expanded', $header.attr('aria-expanded') == 'true' ? 'false' : 'true');
      $mobileButton.toggleClass('open');
      $navigation.focus();
    }
  });
  
    $(window).bind('scroll', function (e) {
      if(!isMobile.matches) {
        if ($(window).scrollTop() > headerTop) {
          $adminBar.addClass('fixed');
          $header.addClass('fixed');
          if($header.data('menu-style') != 'floating') {
            $body.css({
              'padding-top': beforeHeaderHeight + headerHeight,
            });
          }
        }
        if ($(window).scrollTop() <= headerTop) {
          $adminBar.removeClass('fixed');
          if($header.data('menu-style') != 'floating') {
            $body.css({
              'padding-top': 0
            });
          }
          $header.removeClass('fixed');
        }
      }
      else {
        $header.removeClass('fixed');
      }
    });
  
  
  $(window).resize(function() {
    dynamicHeaderHeight();
    
  });
});

$(window).load(function() {
  var $priceList = $('.course-action-buttons__additional-prices'),
      $buttonPurchase = $('.course-action-buttons .button-purchase');
  $buttonPurchase.attr('href', $priceList.val());
  $priceList.on('change', function() {
    $buttonPurchase.attr('href', $(this).val());
  });
});

$(document).ready(function() {
  var $header = $('.course-curriculum .course-curriculum__chapter-header');
  
    $header.not(":eq(0)").each(function(k,v) {
      $(v).parents('.course-curriculum__chapter').addClass('course-curriculum__chapter--collapsed');
      $(v).next('.course-curriculum__chapter-content').hide();
    });
  
  $header.on('click keypress', function(e) {
    if (e.type === 'click') {
      e.stopPropagation();
      var $content = $(this).next('.course-curriculum__chapter-content');

      if($content.is(":visible")) {
        $content.slideUp(350).fadeOut(350);
        $(this).parents('.course-curriculum__chapter').addClass('course-curriculum__chapter--collapsed');
      }
      else {
        $content.slideDown(350).fadeIn(350);
        $(this).parents('.course-curriculum__chapter').removeClass('course-curriculum__chapter--collapsed');
      }
    }
  });
});

$(function(){
  ThinkificAnalytics.track('Course Landing Page', {"Course Name":"The Forex Trading Master Class"});

  var buyButton = $('.btn-purchase');
  var readMoreText = "Read More";
  var readLessText = "Read Less";
  var readmoreBtn = $('.readmore-toggle');
  var readmore = $('.readmore');
  var	readmoreHeight = readmore.height(), minHeight = 270;

  buyButton.on('click', function(e){
    ThinkificAnalytics.track('Buy Course Btn Clicked', {"Course Name":"The Forex Trading Master Class"});
  });

  if ($('#cta-overlay').length > 0) {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 500) {
          $('#cta-overlay').removeClass('hide');
      } else {
          $('#cta-overlay').addClass('hide');
      }
    });
  }

  if(readmoreHeight > minHeight) {
    readmore.addClass('less');
    readmoreBtn.on('click', function() {
      readmore.toggleClass('less');
      if(readmore.hasClass('less')) {
        readmoreBtn.text(readMoreText);
        var sideBar = $(".sidebar-filler");
        $('html, body').animate({scrollTop: sideBar.offset().top - 0}, 'slow');
      } else {
        readmoreBtn.text(readLessText);
      }
    });
  }
  else if(readmoreHeight == minHeight) {
    readmoreBtn.addClass('hidden');
  }
  else {
    readmoreBtn.addClass('hidden');
  }

  $('.toggle-content').on('click', function() {
    var toggleText = $(this).text().trim();
    if(toggleText == "Hide Content") {
      var showText = "Show Content";
      $(this).text(showText);
    } else {
      var hideText = "Hide Content";
      $(this).text(hideText);
    }
  });
});

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=284275161658450";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,'script','twitter-wjs');

// Google+
(function() {
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/plusone.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

$(document).ready(function(){
  //We only care about browsers that report themselves as being Chrome
  //We only apply this when the browser supports the CSS necessary to
  //mask the plain text.
  //We only apply this when NOT an SSL connection.
  var isChromeBrowser = /crmo|chrom(e|ium)/i.test(navigator.userAgent);
  var supportsCssProperty = '-webkit-text-security' in document.body.style;
  var isNotSecure = document.location.protocol !== 'https:'
  if (isChromeBrowser && isNotSecure && supportsCssProperty) {
    var password_fields = $('input[type="password"]');
    if (password_fields) {
      password_fields.attr({type:"text"});
      password_fields.css("-webkit-text-security", "disc")
    }
  }
});

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'95ce63388fcefeef',t:'MTc1MjEzMjk2MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})(); 