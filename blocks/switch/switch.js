

var switchBulb = new (function() {

  var greenDiode = $('.switch__top').find('.switch__diode'),
      redDiode = $('.switch__bottom').find('.switch__diode'),
      bulb = $('.bulb__image');


  function checked(){
    return $('.switch__input').is(":checked");
  }

  function switchEvent() {
    if(checked() === true){
      bulb.toggleClass('-active');
      greenDiode.toggleClass('-active');
      redDiode.removeClass('-active')
    }
    else{
      redDiode.addClass('-active')
    }
  }

  this.init = function () {
    switchEvent()
  }
});



$(document).ready(function () {
  switchBulb.init();
});

$('.switch').click(function () {
  switchBulb.init();
});