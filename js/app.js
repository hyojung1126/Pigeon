$(function () {
// load menu
    $('.header').load('../inc/header.html')
    $('.footer').load('../inc/footer.html')

// 메인페이지
    // 슬라이드
    const prev_page = document.querySelector(".prev_page")
    const next_page = document.querySelector(".next_page")

    prev_page.textContent = 1
    next_page.textContent = 4 


    $('.slide, .m_slide').slick({
        nextArrow : $('.xi-angle-right'),
        prevArrow : $('.xi-angle-left'),
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear'
      });

    $('.slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        prev_page.textContent = (currentSlide+1)%4 + 1
        next_page.textContent = slick.slideCount

        $('.line_top').animate({width:"100%"},4000,function(){
            $('.line_top').css({'width' : '0'});
        })
    });

    $('.line_top').animate({width:"100%"},4000,function(){
        $('.line_top').css({'width' : '0'});
    })

    // 슬라이드 버튼
    $('.icon .xi-pause').click(function(){
        $('.slide').slick('slickPause')
        $('.icon .xi-play').toggle()
        $('.icon .xi-pause').toggle()

        $('.line_top').css('width',0)
    })

    $('.icon .xi-play').click(function(){
        $('.slide').slick('slickPlay')
        $('.icon .xi-play').toggle()
        $('.icon .xi-pause').toggle()

        $('.line_top').animate({width:"100%"},4000,function(){
            $('.line_top').css({'width' : '0'});
        })
    })    

    // 비디오
    $('.video .txt').eq(0).css({'top':'50%'})

    var number = 0
    setInterval(function(){
        var nextNumber = (number+1)%3
        $('.video .txt').eq(number).hide()
        $('.video .txt').eq(nextNumber).css({'top':'57%'})

        $('.video .txt').eq(nextNumber).animate({top:'50%', opacity:'show'},1500)
        number = nextNumber
    },4000)

    // contents
    ScrollReveal().reveal('.img_1', {
        distance : '50px',
        origin : 'left',
        duration : 2000,
        delay : 500
    });

    ScrollReveal().reveal('.img_2', {
        distance : '50px',
        origin : 'right',
        duration : 2000,
        delay : 500
    });

    ScrollReveal().reveal('.contents .text', {
        distance : '50px',
        duration : 2000
    });    
})