//key 값 조절로 slideToggle 만들기
var key = 0;
$('.search').on('click', searchClick);

function searchClick() {
    if (key == 0) { //key=0 일 때, slideDown(=top:0)
        $('.search-bar').animate({
            top: 0
        });
        key++; //key값증가
    } else if (key == 1) { //key=1일 때, slideUp(=top:100% 원래자리)
        $('.search-bar').animate({
            top: '-100%'
        }, 500);
        $('#search').val('');
        key = 0; //key값원래대로
    }
}
//close버튼 누르면 원래자리로
$('span.close').on('click', function() {
    $('.search-bar').animate({
        top: '-100%'
    });
    $('#search').val('');
    //search img로 클릭 후 close버튼으로 닫았을 경우,
    //다음 search img로 재클릭했을 때 바로 실행되야하므로 key값 원래대로
    key = 0;
});