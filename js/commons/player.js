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

var playKey=0;

$('span.play').on('click', spanPlayFunc);
function spanPlayFunc(){
    //나말고 다른 span.play를 눌렀을 때
    var play_pIndex=$(this).parent().parent().index();
    console.log(play_pIndex);
    if(play_pIndex != $('span.play').parent().parent().index()){
        alert('다릅니다')
        // $('.playerBar').css({display:'none'});
    }

    //재생될 때 
    if(playKey==0){
        console.log('spanPlay:'+playKey);
        //1. playerBar
        $('.playerBar').animate({
            width:'100%'
        });
        $('.playerBar').css({'transition':'60.0s'});
        //2. player: icon->stop
        $('a.playerPlay').css({
            background: 'url(img/commons/player/player_control-stop-icon.png) no-repeat',
            backgroundSize: '18px',
            backgroundPosition: 'center'
        });
        //3. player: volumeBar
        $('.volumeBar').css({
            background: '#bcbcbc'
        });
        $('.volumeIcon').css({
            background: 'url(img/commons/player/player_volume-icon.png) no-repeat',
            backgroundSize: '17px',
            backgroundPosition: 'center',
            margin: '13px 0 0px 19px'
        });
        //4. player: time
        $('.songTime span.totalTime').text('01:00');
        $('.playerLogin-pop').fadeIn();
        
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
