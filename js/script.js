// PRELOADER //
function initPreloader(delay) {
    setTimeout( function(){
      $('#preloader').fadeOut(100);
      $('body').removeClass('preloader-running');
      $('body').addClass('preloader-done');
    }, delay );
  }
  function initFrames(delay) {
    setTimeout( function(){
      $('.frames').addClass('animate-out');
    }, delay );
  } 
  function initVideo(delay) {
    setTimeout( function(){
      $("#hero-video")[0].play();
    }, delay );
  } 
  $(window).load(function() { 
    var delay = 300;
    initPreloader(delay);
    initFrames(delay);
    initVideo(delay);
  });
  
  // COVER SIZE //
  function coverSize() {
    $('[data-coversize]').each( function(i){
      var screenHeight = 0;
  
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
       screenHeight = window.screen.height;
      } else {
       screenHeight = $(window).height();
      }
  
      $(this).css({'height': '100vh'});
    });
  }
  $(function() {
    coverSize(); 
  });
  $( window ).resize(function() {
    coverSize(); 
  })
  
  // SHOW MENU //
  function initMenu() {
    setTimeout( function(){
      $('.menu').addClass('animate-in');
    }, 210 );
  } 
  $(function() {
    initMenu();
  });
  
  // ANIMATE FRAMES ON SCROLL //
  function aniMenu(frames, menu) {
  
    var initValues = function() {
      var scrollValue = $(window).scrollTop();
  
      if ( scrollValue > 50 ) {
        $(frames).addClass('animate-in');
        $(menu).addClass('framed');
      } else {
        $(frames).removeClass('animate-in');
        $(menu).removeClass('framed');
      }
    }
    initValues();
  
    window.addEventListener('scroll', function(e) {
      initValues();
    });
  }
  $(function() {
    aniMenu('.frames', '.menu');
  });
  
  // SHOWME - VISIBLE ON SCROLL //
  function visibleOnScroll(dataTarget) {
  
    var initValues = function() {
      $(dataTarget).each( function(i){
        $(this).addClass('showme-out');
        $(this).addClass('showme-animation');
      });
    }
    initValues();
  
    var objectOffset = $(window).height()/2;
    $(window).scroll( function(){
      $(dataTarget).each( function(i){
        var top_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height() - objectOffset;
  
        if( bottom_of_window > top_of_object ){
          $(this).addClass('showme-in');
          $(this).removeClass('showme-out');
        } else {
          $(this).addClass('showme-out');
          $(this).removeClass('showme-in');
        }
          
      }); 
    }); 
  }
  $(function() {
    visibleOnScroll('[data-showme]');
  });
  $( window ).resize(function() {
    visibleOnScroll('[data-showme]');
  })
  
  
  // SHOWME - REPLACES HOVER ON MOBILE //
  function mobileHover(dataTarget) {
    var initValues = function() {
      $(dataTarget).each( function(i){
        $(this).addClass('showme-out');
        $(this).addClass('showme-animation');
      });
    }
    initValues();
  
    var objectOffset = $(window).height()/2;
    $(window).scroll( function(){
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        $(dataTarget).each( function(i){
          var top_of_object = $(this).offset().top;
          var bottom_of_window = $(window).scrollTop() + $(window).height() - objectOffset;
  
          if( bottom_of_window > top_of_object && bottom_of_window < (top_of_object + $(window).height()/2)) {
            $(this).addClass('showme-in');
            $(this).removeClass('showme-out');
          } else {
            $(this).addClass('showme-out');
            $(this).removeClass('showme-in');
          }
            
        });
      } 
    }); 
  }
  $(function() {
    mobileHover('[data-mobilehover]');
  });
  
  function scroll_to_anchor(event, hash) {
      if (event) {
          event.preventDefault();
          var target = $(event.currentTarget);
          var hash = target.context.hash
      }
      if (hash) {
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
      }
  }
  
  $(document).ready(function() {
    // SMOOTH SCROLL to ANCHOR //
    $('.anchor-menu-item').on('click', scroll_to_anchor);
    $('.scroll-down-link').on('click', scroll_to_anchor);
    $('.external-link').on('click', scroll_to_anchor);
    $('.project-info-label').on('click', function(event){
      event.preventDefault();
    });
    if (window.location.hash) {
        setTimeout(function() {
          scroll_to_anchor(null, window.location.hash)
        }, 2000);
    }
  });
  
  
  // TOOLTIPS //
  $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip(); 
  });
  
  
  