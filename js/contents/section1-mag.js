//VIBE MAG 배경이미지 넣기
var mSubLi = $('.magSub>ul>li');
var mSubBg = [];
for (var i = 0; i < mSubLi.length; i++) {
    mSubBg.push('url(img/index/sec1-mag-bg' + i + '.png) no-repeat 50%');
    mSubLi.find('div.magAlbum').eq(i).css({
        background: mSubBg[i],
        backgroundSize: 'cover'
    });
    //VIBE MAG : hover 시
    $('.magAlbum').eq(i).hover(
        function() {
            $(this).find('a.magLink').css({
                opacity: '1',
                background: 'linear-gradient(to bottom, #fff0 70%, #0007)'
            });
            $(this).find('span').fadeIn();
        },
        function() {
            $(this).find('a.magLink').css({
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
var mArrowLeft = $('span.magArrow.left');
var mArrowright = $('span.magArrow.right');

mArrowLeft.on('click', m_arrowLeftFunc);
mArrowright.on('click', m_arrowrightFunc);

var idx = 0;

if (idx == 0) {
    mArrowLeft.fadeOut();
}
function m_arrowrightFunc() {
    var mSubLi = $('.magSub>ul>li');
    var mBannerCon = $('.magBanner-con');

    idx++;
    var mSubGab = mSubLi.eq(1).offset().left - mSubLi.eq(0).offset().left;
    var goSlide = -(mSubGab * idx);

    mBannerCon.animate({
        left: goSlide
    });

    if (idx == 1) {
        mArrowLeft.fadeIn();
    }
    if (idx >= mSubLi.length - 4) {
        mArrowright.fadeOut();
    }
}
function m_arrowLeftFunc() {
    var mSubLi = $('.magSub>ul>li');
    var mBannerCon = $('.magBanner-con');

    idx--;
    var mSubGab = mSubLi.eq(1).offset().left - mSubLi.eq(0).offset().left;
    var goSlide = -(mSubGab * idx);

    mBannerCon.animate({
        left: goSlide
    });

    if (idx == 0) {
        mArrowLeft.fadeOut();
    }
    if (idx >= mSubLi.length - 5) {
        mArrowright.fadeIn();
    }
}