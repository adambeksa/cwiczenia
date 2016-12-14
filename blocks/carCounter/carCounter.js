
$(document).keydown(function(e) {
  var $tip = $('.tipCircle'),
      $deg = 0;
  switch(e.which) {

    case 38: // up
      $deg += 10;
      alert($deg)
      $tip.css({
          transform: "translate(-50%,-50%) rotate("+$deg+"deg)"
      });
      break;

    case 40: // down
      break;

  }
});