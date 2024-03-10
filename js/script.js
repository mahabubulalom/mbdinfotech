let counter = document.querySelectorAll(".counter")
let arr = Array.from(counter)

arr.map((item)=>{
    let count = 0

    function CounterUp(){
        count++
        item.innerHTML = count
        if(count == item.dataset.number){
            clearInterval(stop);
        }
    }
    let stop = setInterval(
        function(){
            CounterUp();
        },100/item.dataset.speed
    );
})





$(function(){
    $(".nav_item .nav_link").on('click', function(event) {
        if (this.hash !== ""){
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
                window.location.hash = hash;
            });
        }
    });

    
    $(".buttom_to_top").click(function(){
        $("body,html").animate({scrollTop:0},1500)
    })
    

});


$('.testimonial-item').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed:2000,
    arrows:true,
    nextArrow: '.right',
    prevArrow: '.left',

  });

$('.delivery__items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed:2000,
    arrows:true,
    nextArrow: '.right1',
    prevArrow: '.left1',

  });