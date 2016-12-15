var $tip = $('.carCounter__tipCircle');

$(document).ready(function () {
  time();
  setTimeout(function () {
    $tip.addClass('animation')
  },1500);
  setTimeout(function () {
    $tip.removeClass('animation');
    $('.-icon').css('opacity','0')
  },3000);
});

$(document).keydown(function(e) {
  $('.-icon').css('opacity','1');
  switch(e.which) {
    case 38: // up
      if(! $tip.hasClass('animation')){
        $tip.addClass('animation');
        setTimeout(function () {
          $tip.removeClass('animation');
          $('.-icon').css('opacity','0')
        },3000);
      }
      break;

    case 87: // down
      if(! $tip.hasClass('animation')){
        $tip.addClass('animation');
        setTimeout(function () {
          $tip.removeClass('animation');
          $('.-icon').css('opacity','0')
        },3000);
      }
      break;

  }
});

function time() {
  function leadingZero(i) {
    return (i < 10) ? '0' + i : i;
  }
  var currentdate = new Date();
  var datetime = + leadingZero(currentdate.getHours()) + ":" + leadingZero(currentdate.getMinutes()) ;
  $('.carCounter__time').text(datetime)

  setTimeout(function () {
    time()
  },1000)
}