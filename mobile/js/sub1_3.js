var swiper2 = new Swiper('.swiper2', {
    //autoHeight: true, 
    slidesPerView: 1,
    spaceBetween:10,
   // centeredSlides: true,
    initialSlide: 1, 
    loop: true,
    // navigation: {    //이전/다음 버튼
    //     nextEl: '.next2',
    //     prevEl: '.prev2',
    // },
    pagination: {   //페이지 네이션
        el: '.pagination2',
        //dynamicBullets: true,
        clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    },
});