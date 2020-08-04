//재생버튼 클릭 시, 플레이어로 가져오기 (1) : "section 1 - magAlbum"
var playerInfo = $('a.albumImg');

$('.magAlbum span.play').on('click', m_playerOnFunc);

function m_playerOnFunc() {
    let m_thisParent = $(this).parent().parent();
    let m_key = m_thisParent.attr('data-index');
    //console.log(idx);
    //substring으로 배열로 넣었는 배경이미지 주소 찾기.
    //console.log(mSubBg[idx].substring(4, mSubBg[idx].length - 15));
    let playerBg1 = mSubBg[m_key].substring(4, mSubBg[m_key].length - 15);

    playerInfo.find('img').attr('src', playerBg1);

}

//재생버튼 클릭 시, 플레이어로 가져오기 (2) : "section 2 - news"
$('.newsImg span.play').on('click', n_playerOnFunc);

function n_playerOnFunc() {
    let n_thisParent = $(this).parent().parent();
    let n_key = n_thisParent.attr('data-index');
    //console.log(idx);
    //substring으로 배열로 넣었는 배경이미지 주소 찾기.
    //console.log(nSubBg[n_key].substring(4, nSubBg[n_key].length - 15));
    let playerBg2 = nSubBg[n_key].substring(4, nSubBg[n_key].length - 15);

    playerInfo.find('img').attr('src', playerBg2);
    playerInfo.find('img').css({
        height: '46px'
    });
}

//재생버튼 클릭 시, 플레이어로 가져오기 (3) : "section 3 - song"
$('.songAlbum span.play').on('click', s_playerOnFunc);

function s_playerOnFunc() {
    let s_thisParent = $(this).parent().parent();
    let s_key = s_thisParent.attr('data-index');
    //console.log(idx);
    //substring으로 배열로 넣었는 배경이미지 주소 찾기.
    //console.log(nSubBg[n_key].substring(4, nSubBg[n_key].length - 15));
    let playerBg3 = sSubBg[s_key].substring(4, sSubBg[s_key].length - 15);

    playerInfo.find('img').attr('src', playerBg3);

}
//span.play를 클릭 시 playerBar 초기화 된 후 다시 진행.
let resetBar = 0;
let playKey = 0;

$('span.play').on('click', playerControl);

function playerControl() {
    $('.playerBar').css({
        display: 'block'
    });
    $('.playerBar').css({
        width: '0'
    });

    $('a.playerPlay').css({
        background: 'url(img/commons/player/player_control-stop-icon.png) no-repeat',
        backgroundSize: '18px',
        backgroundPosition: 'center'
    });

    playKey = 0;
    playerOnFunc();

}


//contents의 재생버튼 클릭 시, 레이어 재생 활성화
$('a.playerPlay').on('click', playerOnFunc);

function playerOnFunc() {

    console.log(playKey);

    var playerImgSrc = $('a.albumImg').find('img').attr('src');
    if (playerImgSrc == 'img/commons/player/player_album-img-none.png') {
        alert('재생될 음악이 없습니다. 음악을 선택해주세요');
        return false;
        //                    playKey++; 
    }

    //재생될때
    if (playKey == 0) {
        $(this).css({
            background: 'url(img/commons/player/player_control-stop-icon.png) no-repeat',
            backgroundSize: '18px',
            backgroundPosition: 'center'
        });
        $('.playerBar').css({
            display: 'block'
        });
        $('.playerBar').animate({
            width: '100%'
        }, 30000);
        $('.volumeBar').css({
            background: '#bcbcbc'
        });
        $('.volumeIcon').css({
            background: 'url(img/commons/player/player_volume-icon.png) no-repeat',
            backgroundSize: '17px',
            backgroundPosition: 'center',
            margin: '13px 0 0px 19px'
        });
        $('.songTime span.totalTime').text('01:00');
        $('.playerLogin-pop').fadeIn();

        playKey++;

    }
    //일시정지
    else if (playKey == 1) {
        console.log(playKey);

        $('.playerBar').stop().animate();
        $(this).css({
            background: 'url(img/commons/player/player_control-play-icon.png) no-repeat',
            backgroundSize: '22px',
            backgroundPosition: 'center'
        });
        playKey = 0;
        console.log(playKey);
    }
}

$('span.player-close').on('click', function() {
    $('.playerLogin-pop').fadeOut(100);
});

//volumeIcon 클릭 시 이미지 교체
var volkey=0;
$('.volumeIcon').on('click', volOnOffFunc);
function volOnOffFunc(){
    //볼륨활성화 상태일 때 == ON
    if(volkey==0){
        $('.volumeIcon').css({
            background: 'url(img/commons/player/player_volume-icon.png) no-repeat',
            backgroundSize: '17px',
            backgroundPosition: 'center',
            margin: '13px 0 0px 19px'
        });
        $('.volumeBar').css({
            background: '#bcbcbc'
        });
        volkey++;
    //볼륨 비활성화 상태일 때 == OFF
    }else if(volkey==1){
        $('.volumeIcon').css({
            background: 'url(img/commons/player/player_volume-none-icon.png) no-repeat',
            backgroundSize: '18px',
            backgroundPosition: 'center',
            margin: '13px 0 0px 20px'
        });
        $('.volumeBar').css({
            background: 'rgba(25,25,25,0.97)'
        });
        volkey=0;
    }
}