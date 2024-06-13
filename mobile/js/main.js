 //비주얼 호출코드
 var swiper1 = new Swiper('.swiper1', {
    autoHeight: true, 
    slidesPerView: 1,
    loop: true,
    navigation: {    //이전/다음 버튼
        nextEl: '.next1',
        prevEl: '.prev1',
    },
    pagination: {   //페이지 네이션
        el: '.pagination1',
        //dynamicBullets: true,
        clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    },
});


var swiper2 = new Swiper('.swiper2', {
    //autoHeight: true, 
    slidesPerView: 2,
    spaceBetween:10,
    centeredSlides: true,
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


 //box3 호출코드 (겔러리)
 var swiper3 = new Swiper('.swiper3', {
    //autoHeight: true, 
    slidesPerView:2,
    spaceBetween:5,
    // navigation: {    //이전/다음 버튼
    //     nextEl: '.next3',
    //     prevEl: '.prev3',
    // },
    pagination: {   //페이지 네이션
        el: '.pagination3',
        //dynamicBullets: true,
        clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    },
});

//검색처리
$('.search a').click(function(e){
    e.preventDefault();

   var pname = $('#search').val();  //베이스
   if(pname){  //검색어를 입력했으면...
      location.href = './sub2_4.html?pname='+  pname;
   }else{   //검색어를 입력하지 않았다면...
      alert('검색어를 입력하세요');
   }
});