var nSubLi = $('.newsSub>ul>li');
var nSubBg = [];
for (var i = 0; i < nSubLi.length; i++) {
    nSubBg.push('url(img/index/sec2-news-bg' + i + '.jpg) no-repeat 50%');
    nSubLi.find('div.newsImg').eq(i).css({
        background: nSubBg[i],
        backgroundSize: 'cover'
    });
    //VIBE MAG : hover 시
    $('.newsImg').eq(i).hover(
        function() {
            $(this).find('a.newsLink').css({
                opacity: '1',
                background: 'linear-gradient(to bottom, #fff0 70%, #0007)'
            });
            $(this).find('span').fadeIn();
        },
        function() {
            $(this).find('a.newsLink').css({
                opacity: '0'
            });
            $(this).find('span').fadeOut();
        }
    );

}

//VIBE MAG Arrow 제어
var nArrowLeft = $('span.newsArrow.left');
var nArrowright = $('span.newsArrow.right');

nArrowLeft.on('click', n_arrowLeftFunc);
nArrowright.on('click', n_arrowrightFunc);

var n_idx = 0;

if (n_idx == 0) {
    nArrowLeft.fadeOut();
}

function n_arrowrightFunc() {
    var nSubLi = $('.newsSub>ul>li');
    var nBannerCon = $('.newsBanner-con');

    n_idx++;
    var nSubGab = $('.newsSub').eq(1).offset().left - $('.newsSub').eq(0).offset().left;
    var goSlide = -(nSubGab * n_idx);

    nBannerCon.animate({
        left: goSlide
    });

    if (n_idx == 1) {
        nArrowLeft.fadeIn();
    }
    if (n_idx >= $('.newsSub').length - 1) {
        nArrowright.fadeOut();
    }
}

function n_arrowLeftFunc() {
    var nSubLi = $('.newsSub>ul>li');
    var nBannerCon = $('.newsBanner-con');

    n_idx--;
    var nSubGab = $('.newsSub').eq(1).offset().left - $('.newsSub').eq(0).offset().left;
    var goSlide = -(nSubGab * n_idx);

    nBannerCon.animate({
        left: goSlide
    });

    if (n_idx == 0) {
        nArrowLeft.fadeOut();
    }
    if (n_idx >= $('.newsSub').length - 2) {
        nArrowright.fadeIn();
    }
}