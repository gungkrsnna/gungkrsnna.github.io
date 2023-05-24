$('.owl-one').owlCarousel({
    // loop:true,
    margin:20,
    merge:true,
    max:5,
    autoWidth:true,
    responsive:{
        678:{
            mergeFit:true,
            items:2
        },
        1000:{
            mergeFit:false,
            items:5
        }
    }
});

var owl = $('.owl-two');
owl.owlCarousel({
    max:4,
    marge:true,
    loop:true,
    autoWidth:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:3000,
    autoplaySpeed: 1000,
    responsive:{
        678:{
            mergeFit:true,
            items:2
        },
        1000:{
            mergeFit:false,
            items:5
        }
    },
    autoplayHoverPause:false,
});