//gnb>ul>li hover 시
var gnbLi = $('.gnb>ul>li');
//gnb>ul>li.eq(1) : 차트 hover 시
gnbLi.eq(1).hover(
    function() {
        $(this).find('img').attr({
            src: 'img/commons/header/header-gnb-chart-h.png',
            alt: 'gnb-chart-hover'
        });
        $(this).find('span').css({
            color: '#fff'
        });
    },
    function() {
        $(this).find('img').attr({
            src: 'img/commons/header/header-gnb-chart.png',
            alt: 'gnb-chart'
        });
        $(this).find('span').css({
            color: '#ccc'
        });
    }
);
//gnb>ul>li.eq(2) : Dj스테이션 hover 시
gnbLi.eq(2).hover(
    function() {
        $(this).find('img').attr({
            src: 'img/commons/header/header-gnb-dj-h.png',
            alt: 'gnb-dj-hover'
        });
        $(this).find('span').css({
            color: '#fff'
        });
    },
    function() {
        $(this).find('img').attr({
            src: 'img/commons/header/header-gnb-dj.png',
            alt: 'gnb-dj'
        });
        $(this).find('span').css({
            color: '#ccc'
        });
    }
);
//gnb>ul>li.eq(3) : VIBE NAG hover 시
gnbLi.eq(3).hover(
    function() {
        $(this).find('img').attr({
            src: 'img/commons/header/header-gnb-mag-h.png',
            alt: 'gnb-chart-hover'
        });
        $(this).find('span').css({
            color: '#fff'
        });
    },
    function() {
        $(this).find('img').attr({
            src: 'img/commons/header/header-gnb-mag.png',
            alt: 'gnb-chart'
        });
        $(this).find('span').css({
            color: '#ccc'
        });
    }
);
//gnb>ul>li.eq(4) : 이달의 노래 hover 시
gnbLi.eq(4).hover(
    function() {
        $(this).find('img').attr({
            src: 'img/commons/header/header-gnb-song-h.png',
            alt: 'gnb-chart-hover'
        });
        $(this).find('span').css({
            color: '#fff'
        });
    },
    function() {
        $(this).find('img').attr({
            src: 'img/commons/header/header-gnb-song.png',
            alt: 'gnb-chart'
        });
        $(this).find('span').css({
            color: '#ccc'
        });
    }
);

//모바일사이즈 menu클릭시 player사라지고 menu 나타내기
$('.inner-header .menu').on('click',function(){
    $('.header .rwdMenu').fadeIn();
    $('.player').fadeOut(500);
});

//모바일사이즈 menu-close클릭시 menu 사라지고 player 나타내기
$('span.rwdMenu-close').on('click',function(){
    $('.header .rwdMenu').fadeOut();
    $('.player').fadeIn(100);
})

//모바일사이즈 menu>login클릭시 menu사라지고 login-pop 나타내기
var rwdLogin=$('.rwd-bMenu>ul>li.rwdLogin');
rwdLogin.on('click',function(){
    $('.header .rwdMenu').fadeOut();
    $('.login-pop').fadeIn(500);
});