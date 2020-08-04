//VIBE MAG 배경이미지 넣기
var sSubLi = $('.songSub>ul>li');
var sSubBg = [];
for (var i = 0; i < mSubLi.length; i++) {
    sSubBg.push('url(img/index/sec3-song-bg' + i + '.png) no-repeat 50%');
    sSubLi.find('div.songAlbum').eq(i).css({
        background: sSubBg[i],
        backgroundSize: 'cover'
    });
    //VIBE MAG : hover 시
    $('.songAlbum').eq(i).hover(
        function() {
            $(this).find('a.songLink').css({
                opacity: '1',
                background: 'linear-gradient(to bottom, #fff0 70%, #0007)'
            });
            $(this).find('span').fadeIn();
        },
        function() {
            $(this).find('a.songLink').css({
                opacity: '0'
            });
            $(this).find('span').fadeOut();
        }
    );
}
//span.play hover 경우
$('span.play').hover(
    function() {
        $(this).css({
            background: '#fff'
        });
    },
    function() {
        $(this).css({
            background: '#fff8'
        });
    }
);


//VIBE MAG Arrow 제어
var sArrowLeft = $('span.songArrow.left');
var sArrowright = $('span.songArrow.right');

sArrowLeft.on('click', s_arrowLeftFunc);
sArrowright.on('click', s_arrowrightFunc);

var s_idx = 0;

if (s_idx == 0) {
    sArrowLeft.fadeOut();
}

function s_arrowrightFunc() {
    var sSubLi = $('.songSub>ul>li');
    var sBannerCon = $('.songBanner-con');

    s_idx++;
    var sSubGab = sSubLi.eq(1).offset().left - sSubLi.eq(0).offset().left;
    var goSlide = -(sSubGab * s_idx);

    sBannerCon.animate({
        left: goSlide
    });

    if (s_idx == 1) {
        sArrowLeft.fadeIn();
    }
    if (s_idx >= sSubLi.length - 4) {
        sArrowright.fadeOut();
    }
}

function s_arrowLeftFunc() {
    var sSubLi = $('.songSub>ul>li');
    var sBannerCon = $('.songBanner-con');

    s_idx--;
    var sSubGab = sSubLi.eq(1).offset().left - sSubLi.eq(0).offset().left;
    var goSlide = -(sSubGab * s_idx);

    sBannerCon.animate({
        left: goSlide
    });

    if (s_idx == 0) {
        sArrowLeft.fadeOut();
    }
    if (s_idx >= sSubLi.length - 5) {
        sArrowright.fadeIn();
    }
}