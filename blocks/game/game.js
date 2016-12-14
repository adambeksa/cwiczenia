
var game = new (function() {
    var $square = $('.game__square');

    function click() {
        $square.click(function () {
            $(this).hide()
        })
    }

    
    this.init = function () {
        click();
    }
});



$(document).ready(function () {
    game.init();
});



$(document).keydown(function(e) {
    var $yourShip = $('.game__yourShip');

    switch(e.which) {
        case 37: // left
            $yourShip.css("left", "-=15");
            $('.game__ammo').css("left", "-=15")
            break;

        case 38: // up
            $yourShip.css("bottom", "+=15");
            $('.game__ammo').css("bottom", "+=15")
            break;

        case 39: // right
            $yourShip.css("left", "+=15");
            $('.game__ammo').css("left", "+=15")
            break;

        case 40: // down
            $yourShip.css("bottom", "-=15");
            $('.game__ammo').css("bottom", "-=15")
            break;

        case 32: // spacebar
            $('.game__ammo').addClass("-run");
            var ammoPosition = $('.game__ammo').position();
            console.log(ammoPosition);
            setTimeout(function () {
                $('.game__ammo').removeClass("-run")
            },200);
            break;
    }
});