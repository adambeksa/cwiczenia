function mansory() {
        var grid = document.querySelector('.row');
        var iso = new Isotope( grid, {
            // options...
            itemSelector: '.realisations-box',
            masonry: {
                columnWidth: 200,
                layoutMode: 'fitRows',
                fitRows: {
                    gutter: 10
                }
            }
        });
}

var tags;

tags = new (function () {
    var $tag = $('.menu-item-object-realizacje1 span'),
        $box = $('.realisations-box');

    function markTags() {
        $tag.click(function () {
            if ($(this).data("tag") == "wszystkie") {
                if (!($(this).hasClass("-active"))) {
                    $tag.removeAttr('class');
                    $(this).addClass("-active");
                    $box.show();
                }
            }
            else {
                $tag.filter('[data-tag="wszystkie"]').removeAttr('class');
                if ($(this).hasClass("-active")) {
                    $(this).removeAttr('class');
                    $box.filter("[data-articletags=' "+ $(this).data("tag") + "']").hide();
                    trigger()
                }
                else {
                    $(this).addClass("-active");
                    if($('.menu-item-object-realizacje1 span.-active').length === $tag.length-1 ){
                        $tag.filter('[data-tag="wszystkie"]').trigger("click");
                    }
                    else{
                        $tag.each(function(){
                            if($(this).hasClass('-active')){
                                $box.filter("[data-articletags=' "+$(this).data("tag") + "']").show();
                            }
                            else{
                                $box.filter("[data-articletags=' "+$(this).data("tag") + "']").hide();
                            }
                        });
                    }
                }
            }
            mansory()
        })
    }

    function trigger(){
        if($('.menu-item-object-realizacje1 span.-active').length == 0){
            $tag.filter('[data-tag="wszystkie"]').trigger("click");
        }
    }


    this.init = function () {
        markTags();
    }
})();

$(document).ready(function () {
    $('.content-relaisations').find('.row').imagesLoaded().always(function() {
        tags.init();
        $('.menu-item-object-realizacje1 span.-active').trigger('click')
    });
});