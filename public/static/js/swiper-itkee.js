var mySwiper = new Swiper ('.swiper-itkee', {
    pagination: '.swiper-pagination',
    paginationClickable :true,
    autoplay : 5000,
    speed:0.5,
    autoplayDisableOnInteraction : false,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }

});
$(function(){
    $(".swiper-itkee").mouseover(function () {
        $(".swiper-itkee .swiper-button-prev,.swiper-itkee .swiper-button-next").fadeIn();
    });
    $(".swiper-itkee").mouseleave(function(){
        $(".swiper-itkee .swiper-button-prev,.swiper-itkee .swiper-button-next").fadeOut();
    })
});

