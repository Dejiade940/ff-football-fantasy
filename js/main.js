$(document).ready(function () {
    $nav = $('.nav');

    $togglecollapse = $('.toggle-collapse');


    $togglecollapse.click(function() {
        $nav.toggleclass("collapse")
    } )



    $('.owl-corousel').owlcarousel();
})  