
$(document).ready(function(){
  if($('.switch__input').length>0){ if (annyang) {
    function voiceClickOn(){
      $('.switch__input').prop('checked', true);
      $('.bulb__image').addClass('-active');
      $('.switch__top').find('.switch__diode').addClass('-active');
      $('.switch__bottom').find('.switch__diode').removeClass('-active');
    }
    function voiceClickOff(){
      $('.switch__input').prop('checked', false);
      $('.bulb__image').removeClass('-active');
      $('.switch__top').find('.switch__diode').removeClass('-active');
      $('.switch__bottom').find('.switch__diode').addClass('-active')
    }
    // Let's define a command.
    var commands = {
      'turn on': voiceClickOn,
      'turn off': voiceClickOff};

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening.
    annyang.start();
  }}
});
