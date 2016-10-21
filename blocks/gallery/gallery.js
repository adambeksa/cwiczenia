var tags;

tags = new (function () {

    function markTags() {
        $('.menu-item-object-realizacje1 span').click(function () {
            if ($(this).data("tag") == "wszystkie") {
                if (!($(this).hasClass("-active"))) {
                    $('.menu-item-object-realizacje1 span').removeAttr('class');
                    $(this).addClass("-active");
                    $(".realisations-box").show();
                }
            }
            else {
                $('.menu-item-object-realizacje1 span[data-tag="wszystkie"]').removeAttr('class');
                if ($(this).hasClass("-active")) {
                    $(this).removeAttr('class');
                    $(".realisations-box[data-articletags=' "+ $(this).data("tag") + "']").hide();
                    trigger()
                }
                else {
                    $(this).addClass("-active");
                    console.log($('.menu-item-object-realizacje1 span.-active').length)
                    console.log($('.menu-item-object-realizacje1 span').length )
                    if($('.menu-item-object-realizacje1 span.-active').length === $('.menu-item-object-realizacje1 span').length-1 ){
                        $('.menu-item-object-realizacje1 span').filter('[data-tag="wszystkie"]').trigger("click");
                    }
                    else{
                        $('.menu-item-object-realizacje1 span').each(function(){
                            if($(this).hasClass('-active')){
                                $(".realisations-box[data-articletags=' "+$(this).data("tag") + "']").show();
                            }
                            else{
                                $(".realisations-box[data-articletags=' "+$(this).data("tag") + "']").hide();
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
            $('.menu-item-object-realizacje1 span').filter('[data-tag="wszystkie"]').trigger("click");
        }
    }

    function mansory() {
        setTimeout(function () {
            var grid = document.querySelector('.row');
            var iso = new Isotope( grid, {
                // options...
                itemSelector: '.realisations-box',
                masonry: {
                    columnWidth: 200
                }
            });
        },0)

    }

    this.init = function () {
        markTags();
    }
})();

$(document).ready(function () {
    tags.init();
    $('.menu-item-object-realizacje1 span.-active').trigger('click')
});