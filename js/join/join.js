///joinBtn 클릭시 join-popup 활성화
//login-popup 비활성화
var joinBtn = $("a.joinBtn");
joinBtn.on("click", joinShow);
function joinShow() {
  $(".login-pop").fadeOut(1000);
  $(".inner-join").animate({ right: "50%" }, 1000);
  $(".join-pop").fadeIn();
}

$("span.join-close").on("click", function () {
  $(".join-pop").fadeOut(1000);
  $(".inner-join").animate({ right: "-100%" }, 0);
});


///약관 본문 내용보기 클릭시
var checkA_con = $(".inner-join form>ul>li.joinCheckBox a");
checkA_con.on("click", function () {
  $(".inner-jCheckBox").animate({ bottom: "50%" }, 800);
  $(".joinCheckBox-con").fadeIn();
});

var checkBox_close = $(".inner-jCheckBox>span.jCheckBox-close");
checkBox_close.on("click", checkBox_closeFunc);
function checkBox_closeFunc() {
  $(".inner-jCheckBox").animate({ bottom: "-100%" }, 1000);
  $(".joinCheckBox-con").fadeOut();
}
