jQuery(document).ready(function($) {
    $("#slide").owlCarousel({
        navigation : false, 
        slideSpeed : 300,
        paginationSpeed : 400,
        pagination : false,
        singleItem : true
    });
    var owl = $("#slide");
    owl.owlCarousel();
        // Custom Navigation Events
        $(".button-right").click(function(){
        owl.trigger('owl.next');
        })
        $(".button-left").click(function(){
        owl.trigger('owl.prev');
    });
});